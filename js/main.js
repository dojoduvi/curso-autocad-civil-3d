$(document).ready(function(){
    
    //DEFINIR AS MÁSCARAS
    $('#txtFone').mask('(00) 00000-0000',{placeholder: '(__) _____-____'});
    $('#txtCPF').mask('000.000.000-00',{placeholder: '___.___.___-__'});
    $('#txtCEP').mask('00000-000',{placeholder: '_____-___'});

     $('#frmAluno').validate({
        rules:{
            txtCPF:{ required: true },
            txtNome:{ required: true },
            txtEmail:{ required: true, email: true },
            txtFone:{ required: true },
            txtCidade:{ required: true },
            txtBairro:{ required: true },
            txtLogradouro:{ required: true },
            txtCEP:{ required: true }
        },
        messages:{
            txtCPF: 'O Campo CPF é Obrigatório!',
            txtNome: 'O Campo Nome é Obrigatório!',
            txtEmail: 'O Campo E-mail é Obrigatório!',
            txtFone: 'O Campo Telefone é Obrigatório!',
            txtCidade: 'O Campo Cidade é Obrigatório!',
            txtBairro: 'O Campo Bairro é Obrigatório!',
            txtLogradouro: 'O Campo Logradouro é Obrigatório!',
            txtCEP: 'O Campo CEP é Obrigatório!'
        },
        submitHandler: function(form){
            txtCPF.value = '';
            txtNome.value = '';
            txtEmail.value = '';
            txtFone.value = '';
            txtCidade.value = '';
            txtBairro.value = '';
            txtLogradouro.value = '';
            txtCEP.value = '';

            const modalOk = new bootstrap.Modal('#modal-ok');
            modalOk.show();
        },
        invalidHandler: function(e,validador){
            const modalErro = new bootstrap.Modal('#modal-erro');
            if (validador.numberOfInvalids()>0){
                modalErro.show();
            }
            console.log(validador.numberOfInvalids());
        }
    })
});