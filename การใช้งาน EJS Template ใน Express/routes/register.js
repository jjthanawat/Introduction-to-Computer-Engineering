const express = require('express')
const router = express.Router()
const { validation } = require('../validator/register')
router.route('/')
    .all((req, res, next) => {
        // ตัวแปรที่กาหนดด้วย ํ res.locals คือค่าจะส่งไปใช้งานใน template
        res.locals.pageData = {
            title:'Register Page'
        }
        // ค่าที่จะไปใช้งาน ฟอร์ม ใน template
        res.locals.user = {
            name:'',
            email:'',
            password:'',
            confirm_password:''
        }

        // กาหนดหน้าที่ ํ render กรณี error ไม่ผานการตรวจสอบข้อมูล ่
        req.renderPage = "pages/register"
        next()
 })
        .get((req, res, next) => {
        res.render('pages/register') 
        })
        .post(validation(), (req, res, next) => {
        // เมื่อสมัครสมาชิก ผานการรวจสอบ ลิ ่ ้งค์ไปหน้า /me
        res.redirect('/me')
        })
module.exports = router