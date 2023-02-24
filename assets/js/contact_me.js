$(function () {
    $("#form-submit").click(function (event) {
        event.preventDefault();

        var email = $("input#email").val();
        function validateEmail(_email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(_email);
        }

        if (!validateEmail(email)) {
            alert("Indique um email válido.");
            return;
        }
        var message = $("textarea#message").val();
        var regExp = new RegExp(" ", "gi");
        var words = (message.match(regExp) || []).length;
        if (words < 10) {
            alert("Escreva um pouco mais de texto na mensagem.");
            return;
        }

        $.ajax({
            url: "mail/contact_me.aspx",
            type: "POST",
            data: {
                name: "name",
                phone: "phone",
                email: email,
                message: message
            },
            cache: false,
            success: function () {
                alert("A sua mensagem foi enviada com sucesso!");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Ocorreu um erro. Tente mais tarde ou através dos outros canais disponíveis");
            },
        })
    });
});
