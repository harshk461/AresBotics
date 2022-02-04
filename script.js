function final(){
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
            return (false)
    }
    let name=document.getElementById('name_id').value;
    let mail=document.getElementById('mail_id').value;
    let age=document.getElementById('age_id').value;
    let opt1=document.getElementById('opt_id').value;
    let opt2=document.getElementById('opt2_id').value;
    let txtarea=document.getElementById('sugst').value;
    if(name==""){
        alert('Please Enter Name')
        document.getElementById('name_id').style.transition='0.5s ease-in-out';
        document.getElementById('name_id').style.borderBottomColor='red';
    }
    if(name!=""){
        document.getElementById('name_id').style.transition='0.5s ease-in-out';
        document.getElementById('name_id').style.borderBottomColor='dodgerblue';
    }
    if(mail=="" || ValidateEmail(mail)==false){
        alert('Enter Proper Mail')
        document.getElementById('mail_id').style.transition='0.5s ease-in-out';
        document.getElementById('mail_id').style.borderBottomColor='red';
    }
    if(mail!="" && ValidateEmail(mail)==true){
        document.getElementById('mail_id').style.transition='0.5s ease-in-out';
        document.getElementById('mail_id').style.borderBottomColor='dodgerblue';
    }
    if(age<0){
        alert('Please Enter Correct Age');
    }
    if(opt1=="start"){
        alert('Please Select Correct Option')
        document.getElementById('opt_id').style.transition='0.5s ease-in-out';
        document.getElementById('opt_id').style.borderBottomColor='red';
    }
    if(opt1!="start"){
        document.getElementById('opt_id').style.transition='0.5s ease-in-out';
        document.getElementById('opt_id').style.borderBottomColor='dodgerblue';
    }
    
    if(opt2=="start"){
        alert('Please Select Correct Option')
        document.getElementById('opt2_id').style.transition='0.5s ease-in-out';
        document.getElementById('opt2_id').style.borderBottomColor='red';
    }
    if(opt2!="start"){
        document.getElementById('opt2_id').style.transition='0.5s ease-in-out';
        document.getElementById('opt2_id').style.borderBottomColor='dodgerblue';
    }
    if(txtarea!=''){
        document.getElementById('sugst').style.transition='0.5s ease-in-out';
        document.getElementById('sugst').style.borderBottomColor='dodgerblue';
    }
       
    if(name!='' && mail!='' && opt1!='start' && opt2!='start' && ValidateEmail(mail)==true){
        alert('Added Sucessfully');
    }
}