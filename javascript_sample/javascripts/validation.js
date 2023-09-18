function emailValidation() {
	const form = document.getElementById('form');
	let naiyou = document.getElementById('naiyou');
	const table = document.getElementsByClassName('contact');
	form.addEventListener('input', function(e)
	{
  
		  const email = form.email.value;// お名前欄の内容を取得してname変数に格納する処理
		  const emailconfirm = form.email_confirm.value;// お名前欄の内容を取得してname変数に格納する処理
		  const parent = naiyou.parentElement;			//挿入個所の親要素取得
		  
		  const errmsgtag = document.getElementsByClassName('alert_input');
		  
		  if(email != "" && emailconfirm !="")
		  {
			  if(email != emailconfirm)
			  {
				  e.preventDefault();
  /*				
				  const errmsgtr = table[0].tBodies[0].insertRow(3);
				  const errmsg = errmsgtr.insertCell(0);
  */			
				  const errmsg = document.getElementById('email_confirm');
				  errmsg.style.backgroundColor = "rgba(230,169,171,.5)";
				  if (errmsgtag.length == 0)
				  {
					  const element = document.createElement("tr");
			  
					  element.id = "err_msg";
					  element.className = "contact_line";
					  parent.insertBefore(element, naiyou);			//tr要素の挿入
					  const td = document.createElement("td");
					  td.className = "alert_input";
					  td.htmlFor = "err_massage";
					  td.innerText = "Eメールが一致しません";
					  td.style.color = "#d14539";						//エラーメッセージは赤字
					  element.appendChild(td);						//td要素の挿入
				  
				  
  /*
				  element.innerText = "Eメールが一致しません";
   
  
					element.classList.add("alert");
  
					setTimeout(function() {
					  form.removeChild(element);
					}, 3000);		
  */		      
					  return false;
				  
				  }
			  }
			  else if(errmsgtag.length > 0)
			  {
				  const errmsg1 = document.getElementById('email_confirm');
				  const errmsg2 = document.getElementById('err_msg');
				  errmsg1.style.backgroundColor = "";
				  errmsg2.remove();
			  }
		  }
	  });
  };
  function formReset() {
				  const errmsg1 = document.getElementById('email_confirm');
				  const errmsg2 = document.getElementById('err_msg');
				  errmsg1.style.backgroundColor = "";
				  errmsg2.remove();
				  
				  return false();
  }
  
  window.onload = emailValidation;