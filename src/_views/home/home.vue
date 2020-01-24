<template>
  <el-row class="main">
    <el-row :gutter="20">
      <el-col :span="18">
        <h2>List of Persons</h2>
        <el-tooltip content="Add" placement="right">
          <el-button @click="add" type="primary" icon="el-icon-plus" circle></el-button>
        </el-tooltip>
      </el-col>
      <el-col :span="6">
        <el-input @input="inputChange" placeholder="Search" v-model="searchInput"></el-input>
      </el-col>
    </el-row>
    <el-table :data="persons.results" style="width: 100%">
      <el-table-column prop="first_name" label="First Name"/>
      <el-table-column prop="last_name" label="Last Name"/>
      <el-table-column prop="birth_date" label="Birth Date"/>
      <el-table-column prop="phone_number" label="Phone Number"/>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-tooltip content="Details" placement="top">
            <el-button @click="details(scope.row)" type="primary" icon="el-icon-view" circle></el-button>
          </el-tooltip>
          <el-tooltip content="Edit" placement="top">
            <el-button @click="edit(scope.row)" type="warning" icon="el-icon-edit" circle></el-button>
          </el-tooltip>
          <el-tooltip content="Delete" placement="top">
            <el-button @click="remove(scope.row.id)" type="danger" icon="el-icon-delete" circle></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="paggination"
      background
      layout="prev, pager, next"
      :total="persons.count"
      :current-page.sync="currentPage"
      @current-change="load"
      :page-sizes="[10]">
    </el-pagination>
    <el-dialog
      title="Person"
      :visible.sync="formDialog.visible"
      center
      @open="() => this.$refs['form'].resetFields()">
      <el-form :model="formDialog.data" :rules="rules" ref="form">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="First Name" prop="first_name">
              <el-input v-model="formDialog.data.first_name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Last Name" prop="last_name">
              <el-input v-model="formDialog.data.last_name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Birth Date" prop="birth_date">
              <el-date-picker 
                value-format="yyyy-MM-dd" 
                type="date" 
                placeholder="Pick a date" 
                v-model="formDialog.data.birth_date" 
                style="width:100%"
                :picker-options="{ disabledDate: disabledDate }">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Phone Number" prop="phone_number">
              <el-input v-mask="'(###) ###-####'" placeholder="(###) ###-####" v-model="formDialog.data.phone_number"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="formDialog.visible = false">Cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
      </span>
    </el-dialog>
    <el-dialog 
      title="Details" 
      :visible.sync="detailsDialog.visible" append-to-body>
      <el-row>
        <el-col v-for="prop in props" :key="prop.name" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="group">
            <span class="title"> {{ prop.label }} </span>
            <span>{{ detailsDialog.data[prop.name] || "No Data" }}</span>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </el-row>
</template>

<script lang="ts" src="./home.ts"></script>
<style lang="scss" scoped src="./home.scss"></style>