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
      <el-table-column prop="zip_code" label="Zip Code"/>
      <el-table-column prop="phone_number" label="Phone Number"/>
      <el-table-column label="Operations">
        <template slot-scope="scope">
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
      :visible.sync="dialog.visible"
      center>
      <el-form :model="dialog.data" :rules="rules" ref="form">
        <el-form-item label="First Name" prop="first_name">
          <el-input v-model="dialog.data.first_name"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" prop="last_name">
          <el-input v-model="dialog.data.last_name"></el-input>
        </el-form-item>
        <el-form-item label="Birth Date" prop="birth_date">
          <el-date-picker 
            value-format="yyyy-MM-dd" 
            type="date" 
            placeholder="Pick a date" 
            v-model="dialog.data.birth_date" 
            style="width:100%"
            :picker-options="{ disabledDate: disabledDate }">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="Zip Code" prop="zip_code">
          <el-input v-model="dialog.data.zip_code"></el-input>
        </el-form-item>
        <el-form-item label="Phone Number" prop="phone_number">
          <el-input v-mask="'(###) ###-####'" placeholder="(###) ###-####" v-model="dialog.data.phone_number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog.visible = false">Cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script lang="ts" src="./home.ts"></script>
<style lang="scss" scoped src="./home.scss"></style>