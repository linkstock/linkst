function bindpreview() {
    $("#mobiledivpreview").html('');
    $("#preloader").show();
    var trdata = "";
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "/Home/bindpreview",
        data: "{ }",
        dataType: "json",
        async: true,
        success: function (data) {

            try {

                trdata += "<div class='text-center'>";
                if (data.ProfileImage == "") {
                    trdata += "<div class='mobile-logo user-logo my-2 text-center'>";
                    trdata += "<img src='/img/profile.jpeg' class='border rounded-circle' title='" + data.UserName + "' alt='" + data.UserName + "'>";
                    trdata += "</div>";
                }
                else {
                    trdata += "<div class='mobile-logo user-logo my-2 text-center'>";
                    trdata += "<img src='" + data.ProfileImage + "' class='border rounded-circle' title='" + data.UserName + "' alt='" + data.UserName + "'>";
                    trdata += "</div>";
                }
                trdata += "<div class='font-weight-bold' style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.PageTextColor + ";'>";
                trdata += data.UserName;

                if (data.Isverified == "1") {
                    trdata += "<i class=''>";
                    trdata += "<img src='~/img/verify.png' width='16' />";
                    trdata += "</i>";
                }
                trdata += "</div>";



                trdata += "<nav aria-label='' class='mb-3'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.PageTextColor + ";'>";
                trdata += data.BioDescription;

                trdata += "</nav>";

                if (data.IsSocialMediaTop == 1) {
                    if (data.Socialmedia.length > 0) {
                        var datasocialmedia = data.Socialmedia;
                        if (data.SocialIconType == "Round") {
                            trdata += "<div class='text-center'>";
                            trdata += "<div class='flex-wrap align-items-center d-flex justify-content-center mobile-social-links'>";
                            for (var i = 0; i < datasocialmedia.length; i++) {
                                trdata += "<a href='#' class='align-items-center btn btn-sm d-flex justify-content-center rounded-pill border-0 text-white " + datasocialmedia[i].ClassName + " '>";
                                trdata += "<i class='" + datasocialmedia[i].SocialMediaImage + "'></i>";
                                trdata += "</a>";
                            }

                            trdata += "</div>";
                            trdata += "</div>";
                        }
                        else {
                            trdata += "<div class='text-center'>";
                            trdata += "<div class='flex-wrap align-items-center d-flex justify-content-center mobile-social-links'>";
                            for (var i = 0; i < datasocialmedia.length; i++) {
                                trdata += "<a href='#' class='align-items-center btn btn-sm d-flex justify-content-center border-0 text-white " + datasocialmedia[i].ClassName + " '>";
                                trdata += "<i class='" + datasocialmedia[i].SocialMediaImage + "'></i>";
                                trdata += "</a>";
                            }

                            trdata += "</div>";
                            trdata += "</div>";
                        }
                    }
                }

                trdata += "<div class='d-flex justify-content-center align-content-center flex-column dropright my-3'>";
                trdata += "<button type='button'  style='background-color: " + data.ButtonStyle + ";border-radius:" + data.ButtonDesign + " !important;' class='btn btnflw btn-outline-dark px-4 mx-auto " + data.ButtonStyle + "'>";
                trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                trdata += "Follow";
                trdata += "</span>";
                trdata += "</button>";
                trdata += "</div>";




                trdata += "<div class='my-3 font-weight-bold'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.PageTextColor + ";'>";
                trdata += data.PageTitle;
                trdata += "</div>";


                trdata += "<div class=''>";
                trdata += "<div class='accordion' id='accordion'>";

                if (data.IsEnquiry == 1 && data.IsEnquiryTop == 1) {
                    trdata += "<div class='card card2 mb-3'>";
                    trdata += "<div class='maindivlink'>";
                    trdata += "<a role='button'  style='background-color: " + data.ButtonStyle + ";border-radius:" + data.ButtonDesign + " !important;' class='btn btnlinkhover btn-user-pro   d-flex justify-content-center align-items-center text-white  " + data.ButtonStyle + "'>";
                    trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                    trdata += "Enquiry";
                    trdata += "</span>";
                    trdata += "</a>";
                    trdata += "</div>";
                    trdata += "</div>";
                }
                if (data.storeList != null) {

                    if (data.storeList.length > 0) {

                        var datastorelist = data.storeList;
                        for (var i = 0; i < datastorelist.length; i++) {

                            if (datastorelist[i].LinkType == "Link") {
                                if (datastorelist[i].ImageName == "") {
                                    trdata += "<div class='card card2 mb-3'>";
                                    trdata += "<div  class='maindivlink'>";
                                    trdata += "<a href='" + datastorelist[i].URL + "'  style='background-color: " + data.ButtonStyle + ";border-radius:" + data.ButtonDesign + " !important;' target='_blank' class='btn btnlinkhover btn-user-pro d-flex justify-content-center align-items-center btnclicklink text-white " + data.ButtonStyle + "'>";
                                    trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                                    trdata += datastorelist[i].StoreName;
                                    trdata += "</span>";
                                    trdata += "</a>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                }
                                else {
                                    trdata += "<div class='card card2 mb-3'>";
                                    trdata += "<div id='maindiv_21' class='maindivlink'>";
                                    trdata += "<a href='https://techkari.com/' target='_blank'  style='background-color: " + data.ButtonStyle + ";border-radius:" + data.ButtonDesign + " !important;' class='btn btn-user-pro btnlinkhover text-white  d-flex justify-content-center align-items-center btnclicklink " + data.ButtonStyle + "'>";
                                    trdata += "<div class='Recommendation-img d-flex align-items-center'>";
                                    trdata += "<img src='" + datastorelist[i].ImageName + "' title='" + datastorelist[i].StoreName + "' alt='" + datastorelist[i].StoreName + "' />";
                                    trdata += "</div>";
                                    trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                                    trdata += datastorelist[i].StoreName;
                                    trdata += "</span>";
                                    trdata += "</a>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                }
                            }
                            else if (datastorelist[i].LinkType == "Video" && datastorelist[i].URL != "") {

                                if (datastorelist[i].OpenStatus == false) {

                                    trdata += "<div class='card mb-3 btnlinkhover' style='border-radius:" + data.ButtonDesign + " !important;'>";
                                   
                                    trdata += "<div class='row'>";
                                    trdata += "<div class='col-12 col-sm-12 m-auto'>";
                                    trdata += "<div class='form-group videoclick position-relative'>";
                                    trdata += "<input type='hidden' id='videoid_25' value='25' class='videoid'>";
                                    trdata += "<div class='clickme' id='clickme_25'></div>";
                                    trdata += "<iframe style='width:100%;height:250px;' src='" + datastorelist[i].URL + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe>";
                                    if (datastorelist[i].StoreName != "") {
                                        trdata += "<div class='p-2'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                                        trdata += datastorelist[i].StoreName;
                                        trdata += "</div>";
                                    }
                                   
                                    trdata += "</div>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                    trdata += "</div>";

                                }
                                else {

                                    trdata += "<div class='card mb-3 btnlinkhover' style='border-radius:" + data.ButtonDesign + " !important;' >";
                                    trdata += "<div class='card2 card-header p-0'>";
                                    trdata += "<button  style='background-color: " + data.ButtonStyle + ";border-radius:" + data.ButtonDesign + " !important;' class='align-items-center btn border-0  btnlinkhover text-white  btn-user-pro d-flex justify-content-center w-100 " + data.ButtonStyle + "' type='button' data-toggle='collapse' data-target='#video_" + data.Id + "' aria-expanded='true'>";
                                    if (datastorelist[i].StoreName != "") {
                                        trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                                        trdata += datastorelist[i].StoreName;
                                        trdata += "</span>";
                                    }
                                    else {
                                        trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                                        trdata += "Video Is Here";
                                        trdata += "</span>";
                                    }

                                    trdata += "<span class='droparrow'>";
                                    trdata += "<i class='fa fa-angle-down'></i>";
                                    trdata += "</span>";
                                    trdata += "</button>";
                                    trdata += "</div>";
                                    trdata += "<div id='video_" + data.Id + "' style='border-radius:" + data.ButtonDesign + " !important;' class='store card collapse' data-parent='#accordion'>";
                                    trdata += "<div class='card-body p-0'>";
                                    trdata += "<div class='row'>";
                                    trdata += "<div class='col-12 col-sm-12 m-auto'>";
                                    trdata += "<div class='form-group videoclick position-relative mb-0'>";
                                    trdata += "<div class='clickme'></div>";
                                    trdata += "<iframe style='width:100%;height:250px;' src='" + datastorelist[i].URL + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen=''></iframe>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                    trdata += " </div>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                }
                            }
                            if (datastorelist[i].LinkType == "Store") {

                                trdata += "<div class='card3 mb-3 border-0'>";
                                trdata += "<div class='card2 card-header p-0 '>";
                                trdata += "<button  style='background-color: " + data.ButtonStyle + ";border-radius:" + data.ButtonDesign + " !important;'  class='align-items-center btn border-0 btnlinkhover text-white  btn-user-pro d-flex justify-content-center w-100 " + data.ButtonStyle + "' type='button' data-toggle='collapse' data-target='#store_" + data.Id + "' aria-expanded='true'>";
                                trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                                trdata += "My Equipments";
                                trdata += "</span>";
                                trdata += "<span class='droparrow'>";
                                trdata += "<i class='fa fa-angle-down'></i>";
                                trdata += "</span>";
                                trdata += "</button>";
                                trdata += "</div>";
                                if (datastorelist[i].OpenStatus == true) {

                                    trdata += "<div id='store_" + data.Id + "' class='store card' data-parent='#accordion' style='background-color: rgb(255, 255, 255);'>";
                                    trdata += "<div class='card-body'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";'>";
                                    trdata += "<div class='font-weight-bold'>Commissions may be earned from the links below.</div>";
                                    trdata += "<div class='d-flex flex-column justify-content-center mb-4'>";
                                    trdata += "<div class='font-weight-bold'>Product Tags :</div>";
                                    trdata += "<nav aria-label=''>";
                                    trdata += "<ol class='bg-transparent breadcrumb justify-content-center mb-0 mobile-tags py-0 text-capitalize'>";
                                    trdata += "<li class='breadcrumb-item' style='cursor:pointer;'>";
                                    trdata += "<span class='clkcategory'>";
                                    trdata += "All";
                                    trdata += "</span>";
                                    trdata += "</li>";
                                    if (datastorelist[i].productCategory != null) {
                                        if (datastorelist[i].productCategory.length > 0) {
                                            var dataproductCategory = datastorelist[i].productCategory;
                                            for (var j = 0; j < dataproductCategory.length; j++) {
                                                trdata += "<li class='breadcrumb-item' style='cursor:pointer;'>";
                                                trdata += "<span class='clkcategory'>" + dataproductCategory[j].CategoryName + "</span>";
                                                trdata += "</li>";
                                            }
                                        }
                                    }
                                    trdata += "</ol>";
                                    trdata += "</nav>";
                                    trdata += "</div>";

                                    trdata += "<div class='divproduct storeproduct '>";

                                    if (datastorelist[i].productList != null) {

                                        if (datastorelist[i].productList.length > 0) {

                                            var dataproductList = datastorelist[i].productList;

                                            for (var j = 0; j < dataproductList.length; j++) {

                                                trdata += "<div class='item' >";
                                                if (dataproductList[j].ProductImage != "") {
                                                    trdata += "<div class='overflow-hidden pro-img rounded text-center'>";
                                                    trdata += "<img src='" + dataproductList[j].ProductImage + "' title='" + dataproductList[j].ProductName + "' alt='" + dataproductList[j].ProductName + "'>";
                                                    trdata += "</div>";
                                                }
                                                else {
                                                    trdata += "<div class='overflow-hidden pro-img rounded text-center'>";
                                                    trdata += "<img src='/img/products.png' title='" + dataproductList[j].ProductName + "' alt='" + dataproductList[j].ProductName + "'>";
                                                    trdata += "</div>";
                                                }
                                                trdata += "<div class='px-2'>";
                                                trdata += "<div class='my-2'>" + dataproductList[j].ProductName + "</div>";
                                                trdata += "<p class='small'>";
                                                trdata += dataproductList[j].ProductDescription;
                                                trdata += "</p>";
                                                trdata += "</div>";
                                                trdata += "<div class='p-3'>";
                                                trdata += "<div class='row align-items-center'>";
                                                if (dataproductList[j].productButtonList.length > 0) {
                                                    var dataproductbuttonList = dataproductList[j].productButtonList;
                                                    for (var k = 0; k < dataproductbuttonList.length; k++) {
                                                        if (dataproductbuttonList[k].Id != 0) {
                                                            trdata += "<div class='col px-1'>";
                                                            trdata += "<a href='#' target='_blank' class='btnproductbutton'>";
                                                            trdata += "<img src='" + dataproductbuttonList[k].ButtonImage + "' class='probtn' title='" + dataproductbuttonList[k].ButtonName + "' alt='" + dataproductbuttonList[k].ButtonName + "'>";
                                                            trdata += "</a>";
                                                            trdata += "</div>";
                                                        }
                                                        else {
                                                            trdata += "<div class='col px-1'>";

                                                            trdata += "</div>";
                                                        }
                                                    }
                                                }
                                                trdata += "</div>";
                                                trdata += "</div>";
                                                trdata += "</div>";
                                            }
                                        }
                                    }

                                    trdata += "</div>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                }
                                else {
                                    trdata += "<div id='store_" + data.Id + "' class='store card collapse' data-parent='#accordion' style='background-color: rgb(255, 255, 255);'>";
                                    trdata += "<div class='card-body'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";'>";
                                    trdata += "<div class='font-weight-bold'>Commissions may be earned from the links below.</div>";
                                    trdata += "<div class='d-flex flex-column justify-content-center mb-4'>";
                                    trdata += "<div class='font-weight-bold'>Product Tags :</div>";
                                    trdata += "<nav aria-label=''>";
                                    trdata += "<ol class='bg-transparent breadcrumb justify-content-center mb-0 mobile-tags py-0 text-capitalize'>";
                                    trdata += "<li class='breadcrumb-item' style='cursor:pointer;'>";
                                    trdata += "<span class='clkcategory'>";
                                    trdata += "All";
                                    trdata += "</span>";
                                    trdata += "</li>";
                                    if (datastorelist[i].productCategory != null) {
                                        if (datastorelist[i].productCategory.length > 0) {
                                            var dataproductCategory = datastorelist[i].productCategory;
                                            for (var j = 0; j < dataproductCategory.length; j++) {
                                                trdata += "<li class='breadcrumb-item' style='cursor:pointer;'>";
                                                trdata += "<span class='clkcategory'>" + dataproductCategory[j].CategoryName + "</span>";
                                                trdata += "</li>";
                                            }
                                        }
                                    }
                                    trdata += "</ol>";
                                    trdata += "</nav>";
                                    trdata += "</div>";

                                    trdata += "<div class='divproduct storeproduct '>";

                                    if (datastorelist[i].productList != null) {

                                        if (datastorelist[i].productList.length > 0) {

                                            var dataproductList = datastorelist[i].productList;

                                            for (var j = 0; j < dataproductList.length; j++) {

                                                trdata += "<div class='item' >";

                                                if (dataproductList[j].ProductImage != "") {
                                                    trdata += "<div class='overflow-hidden pro-img rounded text-center'>";
                                                    trdata += "<img src='" + dataproductList[j].ProductImage + "' title='" + dataproductList[j].ProductName + "' alt='" + dataproductList[j].ProductName + "'>";
                                                    trdata += "</div>";
                                                }
                                                else {
                                                    trdata += "<div class='overflow-hidden pro-img rounded text-center'>";
                                                    trdata += "<img src='/img/products.png' title='" + dataproductList[j].ProductName + "' alt='" + dataproductList[j].ProductName + "'>";
                                                    trdata += "</div>";
                                                }

                                                trdata += "<div class='px-2'>";
                                                trdata += "<div class='my-2'>" + dataproductList[j].ProductName + "</div>";
                                                trdata += "<p class='small'>";
                                                trdata += dataproductList[j].ProductDescription;
                                                trdata += "</p>";
                                                trdata += "</div>";

                                                trdata += "<div class='p-3'>";
                                                trdata += "<div class='row align-items-center'>";
                                                if (dataproductList[j].productButtonList.length > 0) {
                                                    var dataproductbuttonList = dataproductList[j].productButtonList;
                                                    for (var k = 0; k < dataproductbuttonList.length; k++) {
                                                        if (dataproductbuttonList[k].Id != 0) {
                                                            trdata += "<div class='col px-1'>";
                                                            trdata += "<a href='#' target='_blank' class='btnproductbutton'>";
                                                            trdata += "<img src='" + dataproductbuttonList[k].ButtonImage + "' class='probtn' title='" + dataproductbuttonList[k].ButtonName + "' alt='" + dataproductbuttonList[k].ButtonName + "'>";
                                                            trdata += "</a>";
                                                            trdata += "</div>";
                                                        }
                                                        else {
                                                            trdata += "<div class='col px-1'>";

                                                            trdata += "</div>";
                                                        }
                                                    }
                                                }
                                                trdata += "</div>";
                                                trdata += "</div>";
                                                trdata += "</div>";
                                            }
                                        }
                                    }

                                    trdata += "</div>";
                                    trdata += "</div>";
                                    trdata += "</div>";
                                }
                                trdata += "</div>";
                            }
                            else if (datastorelist[i].LinkType == "Image" && datastorelist[i].ImageName != "") {

                                trdata += "<div class='card card2 mb-3' style=''>";
                                trdata += "<div id='maindiv_25'>";
                                trdata += "<div class=''>";
                                trdata += "<img src='" + datastorelist[i].ImageName + "' style='width:100%;border-radius:" + data.ButtonDesign + " !important;'  />";
                                trdata += "</div>";
                                if (datastorelist[i].StoreName != "") {
                                    trdata += "<div class='p-3'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                                    trdata += datastorelist[i].StoreName;
                                    trdata += "</div>";
                                }
                                trdata += "</div>";
                                trdata += "</div>";
                            }
                        }
                    }
                }


                if (data.IsEnquiry == 1 && data.IsEnquiryTop == 0) {
                    trdata += "<div class='card card2 mb-3' style='border-radius:" + data.ButtonDesign + " !important;'>";
                    trdata += "<div class='maindivlink'>";
                    trdata += "<a role='button'  style='background-color: " + data.ButtonStyle + ";' class='btn btnlinkhover btn-user-pro   d-flex justify-content-center align-items-center text-white  " + data.ButtonStyle + "'>";
                    trdata += "<span class='w-100'  style='font-family:" + data.FontStyle + " !important;font-size:" + data.FontSize + ";color:" + data.ButtonTextColor + ";'>";
                    trdata += "Enquiry";
                    trdata += "</span>";
                    trdata += "</a>";
                    trdata += "</div>";
                    trdata += "</div>";
                }

                trdata += "</div>";
                trdata += "</div>";
                trdata += "</div>";
                if (data.IsSocialMediaTop == 0) {
                    if (data.Socialmedia.length > 0) {
                        var datasocialmedia = data.Socialmedia;
                        if (data.SocialIconType == "Round") {
                            trdata += "<div class='text-center'>";
                            trdata += "<div class='flex-wrap align-items-center d-flex justify-content-center mobile-social-links'>";
                            for (var i = 0; i < datasocialmedia.length; i++) {
                                trdata += "<a href='#' class='align-items-center btn btn-sm d-flex justify-content-center rounded-pill border-0 text-white " + datasocialmedia[i].ClassName + " '>";
                                trdata += "<i class='" + datasocialmedia[i].SocialMediaImage + "'></i>";
                                trdata += "</a>";
                            }

                            trdata += "</div>";
                            trdata += "</div>";
                        }
                        else {
                            trdata += "<div class='text-center'>";
                            trdata += "<div class='flex-wrap align-items-center d-flex justify-content-center mobile-social-links'>";
                            for (var i = 0; i < datasocialmedia.length; i++) {
                                trdata += "<a href='#' class='align-items-center btn btn-sm d-flex justify-content-center border-0 text-white " + datasocialmedia[i].ClassName + " '>";
                                trdata += "<i class='" + datasocialmedia[i].SocialMediaImage + "'></i>";
                                trdata += "</a>";
                            }
                            trdata += "</div>";
                            trdata += "</div>";
                        }
                    }
                }

                trdata += "<div class='form-group mt-5 text-center'>";
                if (data.Ispaid == "1") {
                    if (data.FooterIcon != "") {
                        trdata += "<a class='' href='https://linkst.in/' target='_blank'>";
                        trdata += "<img src='" + data.FooterIcon + "' class='logo img-fluid' />";
                        trdata += "</a>";
                    }
                    else {
                        trdata += "<a class='' href='https://linkst.in/' target='_blank'>";
                        trdata += "<img src='/img/linkstlogo.png' class='logo img-fluid' />";
                        trdata += "</a>";
                    }
                }
                else {
                    trdata += "<a class='' href='https://linkst.in/' target='_blank'>";
                    trdata += "<img src='/img/linkstlogo.png' class='logo img-fluid' />";
                    trdata += "</a>";
                }

                trdata += "</div>";

                $("#mobiledivpreview").html(trdata);
                $("#preloader").hide();
            }
            catch (err) {
                $("#preloader").hide();
            }
        },
        error: function (result) {
        }
    });
}