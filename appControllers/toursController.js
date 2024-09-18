const express = require("express");
const Tour = require("./../models/tourModel");

// Handlers/Controllers

exports.getAllTours = async (req,res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
    status: 'success',
    data: {tours}
  })
  } catch(err) {
    res.status(500).json({
    status: 'fail',
    message: "Something went wrong..."
  });
  }};
  
exports.createTour = async (req,res) => {
 try {
  const newTour = await Tour.create(req.body);
  res.status(200)
  .json({
    status: 'success',
    data: {newTour}
    });
} catch(err) {
  // handle error
  res.status(500).json({
    status: "fail",
    message: "Something went wrong..."
  });
}};

exports.getTour = async (req,res) => {
  try {
    const tour = await Tour.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {tour}
  });
} catch(err) {
  res.status(404).json({
    status: 'fail',
    message: "Not found..."
  });
}};

exports.updateTour = async (req,res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(201).json({
    status: 'success',
    message: 'This route has not been implemented...'
  });
  } catch(err) {
    res.status(500).json({
    status: 'fail',
    message: 'This route has not been implemented...'
  });
  }
}
  
exports.deleteTour = async (req,res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    
    res.status(500).json({
    status: 'fail',
    message: 'This route has not been implemented...'
  });
  } catch(err) {
    res.status(500).json({
      status: 'fail',
      message: "Something wemt wrong..."
    })
  }
};