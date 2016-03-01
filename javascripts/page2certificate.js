// 验证表单是否为空
function validate_required(field,alerttxt){
    with (field)
      {
      if (value==null||value=="")
        {alert(alerttxt);return false}
      else {return true}
      }
}

function validate_form(thisform){
    with (thisform)
      {
      if (validate_required(email,"Email must be filled out!")==false)
        {email.focus();return false}
      }
}
// 验证名字长度
function p_name() {
	var name = document.getElementById("username").value;
	var reg = /^\w{3,12}$/;
	if (!reg.test(name)) {
		name = "用户名至少3个字符";
	}else {
		name = "";
	}
}

function IdentityCodeValid(code) {
    var code =document.getElementById("idcode").value;
    var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
    var tip = "";
    var pass= true;
    if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    }
   else if(!city[code.substr(0,2)]){
        tip = "地址编码错误";
        pass = false;
    }
    else{
        //18位身份证需要验证最后一位校验位
        if(code.length == 18){
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            //校验位
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++)
            {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if(parity[sum % 11] != code[17]){
                tip = "校验位错误";
                pass =false;
            }
        }
    }
    if(!pass) console.log(tip);
    return pass;
}
var c = '130981199312253466';
var res= IdentityCodeValid(c);

// 验证手机号码是否正确，匹配验证130-139,150-159,180-189号码段的手机号码
function validatemobile(mobile)
   {
       var mobile = document.getElementById("phone");
       if(mobile.length==0)
       {
          alert('请输入手机号码！');
          document.mobile.focus();
          return false;
       }
       if(mobile.length!=11)
       {
           alert('请输入有效的手机号码！');
           document.mobile.focus();
           return false;
       }

       var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
       if(!myreg.test(mobile))
       {
           alert('请输入有效的手机号码！');
           document.mobile.focus();
           return false;
       }
   }
// 验证地址
function p_address() {
	var address = document.getElementById("address").value;
	var reg = /^[\u4E00-\u9FA5]{1,}$/;
	if (!reg.test(address)) {
		address = "地址不能为空, 且为中文";
	} else {
		address = "";
	}
}