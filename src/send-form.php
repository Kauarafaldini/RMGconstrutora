<?php
// Configurações do destinatário
$to = "kauarsamtos0@gmail.com";
$subject = "Nova mensagem do formulário do site";

// Coleta os dados do formulário
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Monta o corpo do e-mail
$body = "Nome: $name\n";
$body .= "E-mail: $email\n";
$body .= "Mensagem:\n$message\n";

// Cabeçalhos
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envia o e-mail
if (mail($to, $subject, $body, $headers)) {
    echo "success";
} else {
    echo "error";
}
?>