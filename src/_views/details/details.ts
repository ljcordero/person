import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter  } from 'vuex-class';

@Component({
  components: {
  },
})
export default class Details extends Vue {
  @Getter persons: any;
  @Action fetchPersonById: (id: number) => Promise<void>;

  private props: any[] = [
    { label: "First Name", name: "first_name" },
    { label: "Last Name", name: "last_name" },
    { label: "Birth Date", name: "birth_date" },
    { label: "Zip Code", name: "zip_code" },
    { label: "Phone Number", name: "phone_number" },
  ]

  private person: any = null;

  private get id(): number {
    return Number.parseInt(this.$route.params.id);
  }

  mounted() {
    if(isNaN(this.id)) {
      this.$router.back();
    } else {
      if(this.$route.params.row) {
        this.person = this.$route.params.row;
      } else {
        this.getPersonById();
      }
    }
  }

  private getPersonById() {
    this.fetchPersonById(this.id).then(_ => {
      if(this.persons.results) {
        this.person = this.persons.results.find(p => p.id == this.id);
      }
      
      if(!this.person) {
        this.$router.back();
      }
    });
  }

}