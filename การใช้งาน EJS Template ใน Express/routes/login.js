const express = require('express')
const router = express.Router()
const { validation } = require('../validator/users')

router.route('/')
    .all((req, res, next) => {
    // ตัวแปรที่กาหนดด้วย ํ res.locals คือค่าจะส่งไปใช้งานใน template
    res.locals.pageData = {
 title:'Login Page'
 }
 // ค่าที่จะไปใช้งาน ฟอร์ม ใน template
 res.locals.user = {
 email:'',
 password:''
 }
 // กาหนดหน้าที่ ํ render กรณี error ไม่ผานการตรวจสอบข้อมูล ่
 req.renderPage = "pages/login"
 next()
 })
 .get((req, res, next) => {
 res.render('pages/login')
 })
 .post(validation(), (req, res, next) => {
 // ผานการรวจสอบ ลิ ่ ้งค์ไปหน้า /me
 res.redirect('/me')
 })
module.exports = router