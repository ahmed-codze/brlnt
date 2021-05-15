$( document ).ready(function() { 

    function speialnumber() {
        return Math.random() * 1e+17
    };


    // pay options 
    $("#form").submit(function (e) {
        e.preventDefault()

        var total = $("#plan").val()
        alert (total)
        if (total == " باقه بلاتينية"){
            total = 1200
        }else{
            total = 1500
        }

        order_num = speialnumber()
        
        $("#form").prepend(' <input name="order_number" type="text" value=" '+ order_num + '" style="display:none" required="required">        ')
        Swal.fire({
            title: 'قم باختيار طريقه الدفع',
            showDenyButton: true,
            confirmButtonText: `paypal`,
            denyButtonText: `تحويل بنكي`,
          }).then((result) => {
            
            if (result.isConfirmed) {
                Swal.fire('قم بتحوبل '
                + total + 
                ' الي حسابنا في بايبال و سنبدأ العمل فورا',

                'حساب باي بال : احتاجه'

                ).then((result) => {

                    Swal.fire(
                        'بعد تحويلك تحدث معنا عبر واتساب وارسل ال recipt مع رقم الطلب : <br> '
                        +
                        order_num ,
                        '<a href="https://wa.me/+96894252504">96894252504 <i class="fab fa-whatsapp"></i></a>',
                        'success'
                    ).then((result) => { $(this).unbind('submit').submit(); })
                });
            } else if (result.isDenied) {
                Swal.fire(
                    ' قم بتحويل ' 
                    +  total +
                    ' الي حسابنا و سنبدأ  العمل فورا <br> ' ,
                     " حساب البنكي : 0352029020460014 <br> (بنك مسقط)"
                    ).then((result) => {

                        Swal.fire(
                            'بعد تحويلك تحدث معنا عبر واتساب وارسل ال recipt مع رقم الطلب : <br> '
                            +
                            order_num ,
                            '<a href="https://wa.me/+96894252504"  target="_blank" >96894252504 <i class="fab fa-whatsapp"></i></a>',
                            'success'

                        ).then((result) => { $(this).unbind('submit').submit(); })
                });
            }
            
          })
          


          
    });

});