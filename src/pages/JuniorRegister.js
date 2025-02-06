import React, { useState } from "react";
import "./css.css"
import BackToHomeButton from "./backbt";

const Junior = () => {
     const [formData, setFormData] = useState({
       student_first_name: "",
       student_last_name: "",
       gender: "",
       dob: "",
       id_card: "",
       student_phone: "",
       course: "",
       house_number: "",
       moo: "",
       soi: "",
       street: "",
       subdistrict: "",
       district: "",
       province: "",
       postal_code: "",
       father_first_name: "",
       father_last_name: "",
       father_phone: "",
       mother_first_name: "",
       mother_last_name: "",
       mother_phone: "",
       relativer_first_name: "",
       relativer_last_name: "",
       relative_phone: "",
       myFile: null,
     });
   
     const handleChange = (e) => {
       const { name, value, type, files } = e.target;
       setFormData({
         ...formData,
         [name]: type === "file" ? files[0] : value,
       });
     };
   
     const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Form Data:", formData);
     };
   
     return (
       <div className="container">
        <BackToHomeButton className="btnb"/>
         <div className="form-wrapper">
           <form onSubmit={handleSubmit} className="form">
             <p className="title">แบบฟอร์มลงทะเบียนนักเรียน</p>
   
             {/* ข้อมูลนักเรียน */}
             <label className="section-title">ข้อมูลนักเรียน</label>
   
             <div className="grid">
               <div className="form-group">
                 <label>ชื่อนักเรียน</label>
                 <input type="text" name="student_first_name" placeholder="ชื่อ" required onChange={handleChange} />
               </div>
               <div className="form-group">
                 <label>นามสกุลนักเรียน</label>
                 <input type="text" name="student_last_name" placeholder="นามสกุล" required onChange={handleChange} />
               </div>
             </div>
   
             <div className="grid">
               <div className="form-group">
                 <label>วัน/เดือน/ปีเกิด</label>
                 <input type="date" name="dob" required onChange={handleChange} />
               </div>
   
               <div className="form-group">
                 <p>เพศ</p>
                 <div className="radio-group">
                   <label>
                     <input type="radio" name="gender" value="male" onChange={handleChange} /> ชาย
                   </label>
                   <label>
                     <input type="radio" name="gender" value="female" onChange={handleChange} /> หญิง
                   </label>
                 </div>
               </div>
   
             </div>
   
             <div className="form-group">
               <label>เลขบัตรประชาชนนักเรียน</label>
               <input type="text" name="id_card" placeholder="เลขบัตรประชาชน" required onChange={handleChange} />
             </div>
   
             <div className="form-group">
               <label>เบอร์โทรศัพท์นักเรียน</label>
               <input type="tel" name="student_phone" placeholder="เบอร์โทรศัพท์" required onChange={handleChange} />
             </div>
   
             <div className="form-group">
               <label>แผนการเรียน</label>
               <select name="course" onChange={handleChange}>
                 <option value="วิทยาศาสตร์-คณิตศาสตร์">วิทยาศาสตร์-คณิตศาสตร์</option>
                 <option value="วิทยาศาสตร์-คอมพิวเตอร์">วิทยาศาสตร์-คอมพิวเตอร์</option>
                 <option value="อังกฤษ-คณิตศาสตร์">อังกฤษ-คณิตศาสตร์</option>
                 <option value="อังกฤษ-สังคม">อังกฤษ-สังคม</option>
                 <option value="จีน-อังกฤษ">จีน-อังกฤษ</option>
                 <option value="จีน-ธุรกิจศึกษา">จีน-ธุรกิจศึกษา</option>
                 <option value="ศิลปกรรม">ศิลปกรรม</option>
               </select>
             </div>
   
             {/* ข้อมูลที่อยู่ */}
             <label className="section-title">ที่อยู่ตามทะเบียนบ้าน</label>
             <div className="grid">
               <input type="text" name="house_number" placeholder="บ้านเลขที่" required onChange={handleChange} />
               <input type="text" name="moo" placeholder="หมู่ที่" required onChange={handleChange} />
               <input type="text" name="soi" placeholder="ตรอก/ซอย" onChange={handleChange} />
               <input type="text" name="street" placeholder="ถนน" onChange={handleChange} />
               <input type="text" name="subdistrict" placeholder="แขวง/ตำบล" required onChange={handleChange} />
               <input type="text" name="district" placeholder="เขต/อำเภอ" required onChange={handleChange} />
               <input type="text" name="province" placeholder="จังหวัด" required onChange={handleChange} />
               <input type="text" name="postal_code" placeholder="รหัสไปรษณีย์" required onChange={handleChange} />
             </div>
   
             {/* ข้อมูลผู้ปกครอง */}
             <label className="section-title">ข้อมูลผู้ปกครอง</label>
             <div className="grid">
               <input type="text" name="father_first_name" placeholder="ชื่อบิดา" required onChange={handleChange} />
               <input type="text" name="father_last_name" placeholder="นามสกุลบิดา" required onChange={handleChange} />
               <input type="tel" name="father_phone" placeholder="เบอร์โทรศัพท์บิดา" required onChange={handleChange} />
               <input type="text" name="mother_first_name" placeholder="ชื่อมารดา" required onChange={handleChange} />
               <input type="text" name="mother_last_name" placeholder="นามสกุลมารดา" required onChange={handleChange} />
               <input type="tel" name="mother_phone" placeholder="เบอร์โทรศัพท์มารดา" required onChange={handleChange} />
               <input type="text" name="relative_first_name" placeholder="ชื่อญาติ" required onChange={handleChange} />
               <input type="text" name="relative_last_name" placeholder="นามสกุลญาติ" required onChange={handleChange} />
               <input type="tel" name="relative_phone" placeholder="เบอร์โทรศัพท์ญาติ" required onChange={handleChange} />
             </div>
   
             <div className="form-group">
               <label>รูปภาพ</label>
               <input type="file" name="myFile" onChange={handleChange} />
             </div>
   
             <button type="submit" className="btn-submit">Submit</button>
           </form>
         </div>
       </div>
     );
   };
   
  export default Junior;