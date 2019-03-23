# Shiftease

**Requirements**

Front-End

- Login view
- Employee Views
  - View Schedule (Month Calendar)
  - Make Schedule (Week Calendar)

Different types of tours

**LSC**

_Week Days_

- Regular - 10:45am and 2:45 pm, 1 hour 15 mins each
- Special groups ( 9:45am and 1:15 pm ), 1 hr each
- SPRING ONLY (admitted students only) - 10am, 2pm, 1hr each
- Extra (when 10:45am and 2:45am are busy) - 12:45pm

_Saturdays_

- 10:15am and 11:45am, 1hr 15 mins each

**WTC**

_Week Days only_

- Regular - 12pm and 2pm everyday - 45 mins each

---

Meeting 3/23 Notes

# 1. Introduction

## 1.1 Purpose

intro to/ tl;dr of scope - why we doin what we doin

## 1.2 Document Conventions

This document uses no special formatting conventions.

## 1.3 Intended Audience and Reading Suggestions

intended audience: shift managers and their employees. why is it beneficial for them? other possible groups that could benefit.
reading suggestions: refer people to the overall description section (2) and System Features section.

## 1.4 Product Scope

short description of software, what it's for, benefits it provides, objectives and goals of the project

# 2 Overall Description

## 2.1 Product Perspective

restate purpose sort of. briefly break down components of project (front-end, back-end, "database", ML)

## 2.2 Product Functions

main functional requirements: 1) two user interfaces for visualizing the current schedule, one for managers and one for employees, 2) managers can make schedule, 3) employees can input info necessary for manager to make schedule (availability)

## 2.3 User Classes and Characteristics

though, as mentioned, this product can potentially benefit a variety of users, we will use the terminology of "employee" and "manager" for the two types of users, referring to a user who is scheduled for shifts and a user who shcedules shifts, respectively

1. managers: can make schedules and can view all employees' shifts, 2) employees: can provide availability and view either all employees' shifts or only their own
   note: intended to help any manager or employee, regardless of demographic or other business attributes

## 2.4 Operating Environment

this is a web app, so our product will run in any web browser

## 2.5 Design and Implementation Constraints

internet connection is required, schedule is limited to the information provided by the employees, schedule will not be available to employees until manager makes it

## 2.6 User Documentation

example of how google sheet should be formatted for app to work properly
see FAQs, manuals, tutorials, etc for how to use the app.

## 2.7 Assumptions and Dependencies

you have a modern computer with an up to date web browser (chrome, firefox, ie8 or above) and internet connection.
manager should have google sheet with users availability filled in according to section 2.6 in this document

# 3 External Interface Requirements

## 3.1 User Interfaces

**put mockups here**

1. Employee Schedule View
2. Manager Schedule View
3. Employee Provide Availability View
4. Manager make schedule view

# 4 System Features

## 4.1 View Schedule

### 4.1.1 Description and Priority

Viewing the schedule is of high priority for Shiftease. In doing so, we allow both managers and employees to view current schedule for upcoming month.

### 4.1.2 Stimulus / Response Sequences

Viewing the schedule is largely static for the user, based purely on how the manager has made the schedule. That said, Employees can toggle between viewing only their shifts for the upcoming month or all employees' shifts.

## 4.2 Make Schedule

**fill in these in style of 4.1**

### 4.2.1 Description and Priority

### 4.2.2 Stimulus / Response Sequences

## 4.3 Provide Availability

### 4.3.1 Description and Priority

### 4.3.2 Stimulus / Response Sequences

# 5 Other Nonfunctional Requirements

## 5.1 Performance Requirements

Mainly scheduling algorithm itself, speed and accuracy

## 5.2 Security Requirements

Be able to log in, don't get hacked

## 5.3 Software Quality Attributes

Usability, testability, availability
