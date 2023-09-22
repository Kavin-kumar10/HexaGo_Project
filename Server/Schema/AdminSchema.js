const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema({
    "name": {
        "type": "string"
    },
    "password": {
        "type": "string"
    },
    "email": {
        "type": "string"
    },
    "city":{
        "type":"string"
    },
    "Schedules": {
        "type": "array",
        "items": {}
    },
    "Accepted": {
        "type": "array",
        "items": {}
    },
    "Rejected": {
        "type": "array",
        "items": {}
    },
    "lat": {
        "type": "number"
    },
    "lon": {
        "type": "number"
    },
    "Available": {
        "type": "number"
    }
},{timestamps:true})

module.exports = mongoose.model('Admin',Admin)