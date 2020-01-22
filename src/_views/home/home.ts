import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter  } from 'vuex-class';
import { debounce } from 'lodash';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  @Getter persons: any;
  @Action fetchPersons: ({length, searchInput}: any) => Promise<void>;
  @Action addPerson: (person: any) => Promise<void>;
  @Action updatePerson: (person: any) => Promise<void>;
  @Action deletePerson: (id: number) => Promise<void>;

  private dialog: any = {
    visible: false,
    data: {}
  };
  private searchInput = "";
  private currentPage = 1;
  private rules = {
    first_name: [
      { required: true, message: 'Please input First name', trigger: 'blur' },
      { min: 3, max: 200, message: 'Length should be 3 to 200', trigger: 'blur' }
    ],
    last_name: [
      { required: true, message: 'Please input Last name', trigger: 'blur' },
      { min: 3, max: 200, message: 'Length should be 3 to 200', trigger: 'blur' }
    ],
    birth_date: [
      { required: true, message: 'Please input Birth date', trigger: 'blur' },
    ],
    zip_code: [
      { required: true, message: 'Please input Zip code', trigger: 'blur' },
      { min: 2, max: 100, message: 'Length should be 2 to 100', trigger: 'blur' }
    ],
    phone_number: [
      { required: true, message: 'Please input Phone Number', trigger: 'blur' },
    ],
  }

  private disabledDate(date) {
    return date.getTime() > Date.now();
  }

  private inputChange = debounce(this.load, 1000);

  mounted() {
    this.load();
  }

  private load() {
    this.fetchPersons({ length: (this.currentPage - 1) * 10, searchInput: this.searchInput });
  }

  private add() {
    this.dialog = {
      visible: true,
      data: {}
    };
  }

  private edit(row) {
    this.dialog = {
      visible: true,
      data: {...row}
    };
  }

  private save() {
    (this.$refs['form'] as any).validate(async (valid)=> {
      if (valid) {
        if(this.dialog.data.id) {
          this.updatePerson(this.dialog.data);
        } else {
          this.addPerson(this.dialog.data);
        }
        this.dialog = {
          visible: false,
          data: {}
        };
      }
    });
  }

  private remove(id) {
    this.$confirm('Are you sure want delete this record?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      this.deletePerson(id).then(_ => {
        if(this.persons.next) {
          this.load();
        }
        if(this.persons.results.length == 0 && this.persons.count > 0) {
          this.currentPage--;
          this.load();
        }
      });
    }).catch(() => {
      this.$message({
        type: 'info',
        message: 'Delete canceled'
      });          
    }); 
  }

}