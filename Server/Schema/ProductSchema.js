const express = require("express");
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Products = new Schema(
    {
      "username": {
        "type": "string"
      },
      "origin": {
        "type": "string"
      },
      "title": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "minimum": {
        "type": "string"
      },
      "location": {
        "type": "string"
      },
      "sellerMail": {
        "type": "string"
      },
      "endDate": {
        "type": "string"
      },
      "seller": {
        "type": "string"
      },
      "finalBid": {
        "type": "number"
      },
      "latestBid": {
        "type": "number"
      },
      "latestMem": {
        "type": "string"
      },
      "period": {
        "type": "string"
      },
      "material": {
        "type": "string"
      },
      "damage": {
        "type": "string"
      },
      "additional": {
        "type": "string"
      },
      "proof": {
        "type": "string"
      },
      "img_url": {
        "type": "string"
      },
      "status":{
        "type":"number"
      },
      "Schedule":{
        "type":"string"
      },
      "ScheduledAdmin":{
        "type":"string"
      }
      },{timestamps:true}
)

module.exports = mongoose.model('products',Products)