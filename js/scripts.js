 function OpenLoginPopup() {
                var divToOpen = "loginDiv";
                var popupSetting = { width: '204', height: '400', title: 'Sign Up',isFixed:true };
                ShowPopup(divToOpen, popupSetting);
            }
 function OpenLogin2Popup() {
                var divToOpen = "loginDiv2";
                var popupSetting = { width: '350', height: '400', title: 'Sign Up',isFixed:true };
                ShowPopup(divToOpen, popupSetting);
            }
            // Function to Show Div Popup
            function ShowPopup(divId, popupSetting) {

                var divElt = document.getElementById(divId);
                divElt.style.display = 'block';
                var element = divElt.parentElement;
                popupSetting = popupSetting || {};

                if (!popupSetting.width) { popupSetting.width = divElt.offsetWidth };
                if (!popupSetting.height) { popupSetting.height = divElt.offsetHeight };
                if (!popupSetting.title) { popupSetting.title = 'Dialog' };

                var table = document.createElement('table');
                table.setAttribute('id', 'table' + divId);table.setAttribute('cellspacing', '0');table.setAttribute('cellpadding', '0');

                var tr1 = document.createElement('tr'); tr1.className = 'PopupHeader';
                var td1 = document.createElement('td');
                var span = document.createElement('span'); span.innerHTML = popupSetting.title;
                span.setAttribute('style', 'font-size: 20px; font-weight: 400;');
                td1.appendChild(span); tr1.appendChild(td1); table.appendChild(tr1);

                var tr2 = document.createElement('tr');
                var tdDynamic = document.createElement('td');
                tdDynamic.setAttribute('align', 'center');
                tdDynamic.setAttribute('style', 'padding-top: 20px; vertical-align:top;');

                var tempElt = document.createElement('div');
                tempElt.setAttribute('id', 'tempElt' + divElt.id);
                divElt.parentElement.insertBefore(tempElt, divElt);

                tdDynamic.appendChild(divElt);
                tr2.appendChild(tdDynamic);
                table.appendChild(tr2);
                var cssText = 'display: block; border-radius:10px; -webkit-border-radius:10px; -o-border-radius:10px; -moz-border-radius:10px; border:1px solid #dde1e5;  z-index:92000; background-color:#383a4c; top:50%; left:50%; text-align:left;';
                cssText += 'width: ' + popupSetting.width + 'px; height: ' + popupSetting.height + 'px; margin-left: -' + Math.round(popupSetting.width / 2) + 'px; margin-top: -' + Math.round(popupSetting.height / 2) + 'px;';

                if (popupSetting.isFixed === true) { cssText += 'position: fixed;';}
                else { cssText += 'position: absolute;'; }

                table.setAttribute('style', cssText);
                element.appendChild(table);

                var shadeElt = document.createElement('div');
                shadeElt.id = "ShadedBG";shadeElt.className = "ShadedBG";
                tempElt.appendChild(shadeElt);
                var myEl = document.getElementById('ShadedBG');

                myEl.addEventListener('click', function () {
                    ClosePopupDiv('loginDiv');
                }, false);
                 myEl.addEventListener('click', function () {
                    ClosePopupDiv('loginDiv2');
                }, false);

            }

            // Function to Close Div Popup
            function ClosePopupDiv(divId) {
                var table = document.getElementById('table' + divId);
                var element = table.parentElement;
                var divElt = document.getElementById(divId);
                divElt.style.display = 'none';
                var tempElt = document.getElementById('tempElt' + divId);
                tempElt.parentElement.insertBefore(divElt, tempElt);
                table.parentElement.removeChild(table);
                table.setAttribute('style', 'display: none');
                tempElt.parentElement.removeChild(tempElt);
            }

$(document).ready(function() {
    $("#complianceOverlay").show();

     $("#closeModal").click(function(){
        if($("#complianceOverlay").hasClass('showCompliance')) {
            $("#complianceOverlay").removeClass('showCompliance');
            $("#complianceOverlay").addClass('closeCompliance');
            $("#complianceOverlay").delay(500).hide(1);
        }
    });
});     

$(window).scroll(function () {
   var documentTop = $(window).scrollTop();

   if(documentTop > 0) {
        $("#complianceOverlay").removeClass('showCompliance');
        $("#complianceOverlay").addClass('closeCompliance');
        $("#complianceOverlay").delay(100).hide(1);
   } else {
        $("#complianceOverlay").removeClass('closeCompliance');
        $("#complianceOverlay").addClass('showCompliance');
        $("#complianceOverlay").show(1);
   }
});