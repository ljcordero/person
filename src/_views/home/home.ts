import { Component, Vue } from 'vue-property-decorator';
import { Action  } from 'vuex-class';
import HttpClient from '@/_core/api/http-client';


@Component({
  components: {
  },
})
export default class Home extends Vue {
  @Action setLoading: (loading: boolean) => void;

  private persons = [];
  private dialog: any = {
    visible: false,
    data: {}
  };

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
  }

  private disabledDate(date) {
    return date.getTime() > Date.now();
  }

  mounted() {
    this.load();
  }

  private async load() {
    this.setLoading(true);
    try {
      let data = await HttpClient.get("Person");
      this.persons = data;
    } catch(err) {
      this.$message.error(err);
    } finally {
      this.setLoading(false);
    }
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
      data: row
    };
  }

  private async save() {
    (this.$refs['form'] as any).validate(async (valid)=> {
      if (valid) {
        try {
          this.setLoading(true);
          if(this.dialog.data.id) {
            await HttpClient.put(`Person/${this.dialog.data.id}/`, this.dialog.data);
          } else {
            await HttpClient.post("Person/", this.dialog.data);
          }
          this.load();
          this.dialog = {
            visible: false,
            data: {}
          };
        } catch(err) {
          this.$message.error(err);
        } finally {
          this.setLoading(false);
        }
      }
    });
  }

  private async remove(id) {
    try {
      this.setLoading(true);
      await HttpClient.delete(`Person/${id}/`);
    } catch(err) {
      this.$message.error(err);
    } finally {
      this.setLoading(false);
      this.load();
    }
  }

}