const express = require('express');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Users = new Schema({
    "Username": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "password": {
        "type": "string"
      }
},{timestamps:true})

module.exports = mongoose.model('Users',Users);