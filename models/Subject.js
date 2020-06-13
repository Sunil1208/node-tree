const express = require('express')
const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 24
    }
},{timestamps:true});

module.exports = mongoose.model("Subject",subjectSchema)