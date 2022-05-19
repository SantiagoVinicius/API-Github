function GithubUsuario(){
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/gutoffline",
         success: (function(user){
             let usuario = user.name
             let login = user.login
             let foto = user.avatar_url
             let twitter = user.twitter_username
             let github = user.url
             let medium = user.blog
             let senac = user.company
             let pais = user.location
             document.getElementById("informacao-completo").innerHTML = `<div class="col-md-5"><img src="${foto}" width="150"></div> <div class="col-md-7"> ${usuario} (${login}) <br> Twitter: ${twitter} <br> Github:${github}  <br> Blog:${medium} <br> ${senac} - ${pais}`
        })
    })
}
document.getElementById("buscar").addEventListener("click", function() {
    GithubUsuario();
})
