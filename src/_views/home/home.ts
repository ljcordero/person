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

  private formDialog: any = {
    visible: false,
    data: {}
  };
  private detailsDialog: any = {
    visible: false,
    data: {}
  }
  private props: any[] = [
    { label: "First Name", name: "first_name" },
    { label: "Last Name", name: "last_name" },
    { label: "Birth Date", name: "birth_date" },
    { label: "Phone Number", name: "phone_number" },
  ]
  private searchInput: string = "";
  private currentPage: number = 1;
  private rules: any = {
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

  private inputChange = debounce(this.search, 1000);

  mounted() {
    if(this.$route.query.search) {
      this.searchInput = this.$route.query.search as string;
    }
    this.load();
  }

  private search() {
    this.currentPage = 1;
    this.$router.replace({ name: "home", query: {search: this.searchInput} });
    this.load();
  }

  private load() {
    this.fetchPersons({ length: (this.currentPage - 1) * 10, searchInput: this.searchInput });
  }

  private add() {
    this.formDialog = {
      visible: true,
      data: {}
    };
  }

  private edit(row) {
    this.formDialog = {
      visible: true,
      data: {...row}
    };
  }

  private details(row) {
    this.detailsDialog = {
      visible: true,
      data: row
    };
  }

  private save() {
    (this.$refs['form'] as any).validate(async (valid)=> {
      if (valid) {
        if(this.formDialog.data.id) {
          this.updatePerson(this.formDialog.data);
        } else {
          this.addPerson(this.formDialog.data);
        }
        this.formDialog = {
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