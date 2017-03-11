$(document).ready(function() {
	$('#form').bootstrapValidator({
            message: '输入值无效',
            feedbackIcons: {/*输入框不同状态，显示图片的样式*/
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {/*验证*/
                teamname: {/*键名username和input name值对应*/
                    message: 'The username is not valid',
                    validators: {
                        notEmpty: {/*非空提示*/
                            message: '团队名不能为空'
                        }
                    }
                },
				tel: {
					message: '号码格式不对',
					validators : {
						notEmpty: {/*非空提示*/
                            message: '不能为空'
                        },
						regexp: {
							regexp: /^1[34578]\d{9}$/
						}
					}
				},
				name1: {
					validators : {
						notEmpty: {/*非空提示*/
                            message: '不能为空'
                        }
					}
				},
				name2: {
					validators : {
						notEmpty: {/*非空提示*/
                            message: '不能为空'
                        }
					}
				}
            }
        });
	$('#getImage').on('click',function(e){
		e.preventDefault()
		$('#imageError').hide()
		$.ajax({
			url:'/api/authImage',
			type:'GET',
			success: function(data){
				$('#authImage').text(data.a + '+' + data.b + '=?').show()
			}
		})
	})
	$('#submit').on('click',function(event){
		event.preventDefault()
		$('#getit').hide()
		var detailForm = document.forms['join'];
		var menbers = [];
		for(var i=0; i<4; i++){
			menbers[i] = {
				name: detailForm['name' + (i + 1)].value,
				sex: detailForm['sex' + (i + 1)].value,
				tel: detailForm['tel' + (i + 1)].value,
			}
		}
		var detail = {
			teamName: detailForm["teamname"].value,
			grade: detailForm["grade"].value,
			school: detailForm["school"].value,
			college: detailForm["college"].value,
			tel: detailForm["tel"].value
		}
		$.ajax({
			url: 'api/addTeam',
			type: 'POST',
			data: JSON.stringify({
				info: detail,
				menbers: menbers,
				answer: parseInt(document.forms['join']['answer'].value)
			}),
			contentType: 'application/json',
			success: function(res,status){
				if(status == 'success'){
					document.forms['join'].reset();
					$('#getit').show();
					$('#authImage').hide();
				}
			},
			error: function(res,status){
				$('#authImage').hide();
				$('#imageError').show()
			}
		})
	})
})