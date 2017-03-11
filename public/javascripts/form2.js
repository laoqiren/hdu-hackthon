$(document).ready(function() {
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
		var detail = {
			name: detailForm["name"].value,
			grade: detailForm["grade"].value,
			school: detailForm["school"].value,
			college: detailForm["college"].value,
			tel: detailForm["tel"].value,
            sex: detailForm['sex'].value,
			answer: parseInt(document.forms['join']['answer'].value)
		}
		$.ajax({
			url: 'api/addMenber',
			type: 'POST',
			data: JSON.stringify(detail),
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