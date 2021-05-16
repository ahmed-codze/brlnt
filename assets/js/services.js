$( document ).ready(function() { 

    function speialnumber() {
        return Math.random() * 1e+17
    };


    // pay options 
    $("#form").submit(function (e) {
        e.preventDefault()

        var total = $("#plan").val()
        if (total == " باقه بلاتينية"){
            total = 1200
        }else{
            total = 1500
        }

        order_num = speialnumber()
        
        $("#form").prepend(' <input name="order_number" type="text" value=" '+ order_num + '" style="display:none" required="required">        ')
        Swal.fire({
            title: 'اختر طريقه الدفع',
            showDenyButton: true,
            confirmButtonText: `تحويل بنكي`,
            denyButtonText: `الغاء `,
          }).then((result) => {
            
            if (result.isConfirmed) {
                Swal.fire(
                    ' قم بتحويل ' 
                    +  total +
                    ' الي حسابنا و سنبدأ  العمل فورا <br> ' ,
                     " حساب البنكي : 0315012166660013 <br> (بنك مسقط)"
                    ).then((result) => {

                    Swal.fire(
                        'بعد تحويلك تحدث معنا عبر واتساب وارسل ال recipt مع رقم الطلب : <br> '
                        +
                        order_num ,
                        '<a href="https://wa.me/0096898988995">0096898988995 <i class="fab fa-whatsapp"></i></a>',
                        'success'
                    ).then((result) => { $(this).unbind('submit').submit(); })
                });
            }
            
          })
          


          
    });

});