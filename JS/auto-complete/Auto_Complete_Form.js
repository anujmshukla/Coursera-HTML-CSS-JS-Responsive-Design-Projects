function billingFunction()
{
    var c= document.getElementById("same").checked;
    // console.log(c);
    if(c)
    {
        var shipName = document.getElementById("shippingName").value;
        var shipZip = document.getElementById("shippingZip").value;
        // console.log(shipName)
        if(shipName=="" && shipZip=="")
        {
            shipName = document.getElementById("shippingName").value = "Test";
            shipZip = document.getElementById("shippingZip").value = "12345"
        }
        document.getElementById("billingName").value = shipName;
        document.getElementById("billingZip").value = shipZip
    }
    else
    {
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
        document.getElementById("shippingName").value = "";
        document.getElementById("shippingZip").value = "";
    }
}