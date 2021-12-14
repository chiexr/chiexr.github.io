

(function () {
    
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll("#submissionForm")
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

function optiondiv(x)
{
    if(x==0)
    {
    document.getElementById("description1").style.display="block";
    document.getElementById("description2").style.display="none";
    document.getElementById("description3").style.display="none";
    }
    else if(x==1)
    {
    document.getElementById("description2").style.display="block";
    document.getElementById("description1").style.display="none";
    document.getElementById("description3").style.display="none";
    }
    else if(x==2)
    {
    document.getElementById("description3").style.display="block";
    document.getElementById("description2").style.display="none";
    document.getElementById("description1").style.display="none";
    }
    else
    {
    document.getElementById("description1").style.display="none";
    document.getElementById("description2").style.display="none";
    document.getElementById("description3").style.display="none";
    }
    return;

}


function calculateAmount(val)
{
    var totalcal = val *  130.00;
    var totalpay = document.getElementById('rates');
    totalpay.value = totalcal;
}

