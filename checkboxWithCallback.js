function checkboxWithCallback(clickAllElement, changeElements, callback){

    $(clickAllElement).click(function () {

        if($(this).prop('checked')){

            $(changeElements).prop('checked', this.checked);

            if(typeof callback === "function"){

                callback();

            } else {

                console.log("No callback method available");

            }

        } else {

            $(changeElements).prop('checked', "");

        }

    });

    $(changeElements).change(function(){

        var all         = $(changeElements).length,
            allChecked  = $(changeElements + ":checked").length;

        if(all == allChecked){

            $(clickAllElement).prop("checked","checked");

            if(typeof callback === "function"){

                callback();

            } else {

                console.log("No callback method available");

            }

        } else {

            $(clickAllElement).prop("checked","");

        }

    });

}