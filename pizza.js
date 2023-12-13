let navbar=document.queryselector('.header .flex .navbar');
 
document.queryselector('#menu-btn').oneclick=()=>{
    navbar.classlist.toggle('active');
}

window.onscroll = () =>{
    navbar.classlist.toggle('active');
};