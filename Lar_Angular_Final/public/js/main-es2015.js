(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\r\n<app-nav></app-nav>\r\n<app-nav-funcao *ngIf=\"mostrarMenu\"></app-nav-funcao>\r\n<section>\r\n    <router-outlet></router-outlet>\r\n</section>\r\n<!-- Footer -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cliente/cliente.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cliente/cliente.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div *ngIf=\"mostrarAlert\" class=\"alert alert-danger\" role=\"alert\">\r\n        Erro ao realizar o cadastro do cliente. Verifique os Dados !!!\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n        <label for=\"inputEmail4\">Email</label>\r\n        <input [(ngModel)]=\"usuario.email\" type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n        <label for=\"inputPassword4\">Password</label>\r\n        <input [(ngModel)]=\"usuario.senha\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Senha\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"inputAddress\">Nome</label>\r\n        <input [(ngModel)]=\"usuario.nome\" type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Gabriel\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label for=\"inputAddress2\">CPF</label>\r\n        <input [(ngModel)]=\"usuario.cpf\" type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"000.111.222-85\">\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"salvar()\">Sign in</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Just an image -->\r\n<div class=\".container-fluid\">\r\n    <nav class=\"navbar navbar-dark bg-dark\">\r\n        <figure class=\"figure\">\r\n            <img src=\"/storage/imgFixa/logo-rodape.png\" class=\"figure-img img-fluid rounded\" alt=\"Rodape\">            \r\n        </figure>        \r\n        <li class=\"justify-content-end\">\r\n            <a class=\"navbar-brand justify-content-end\" href=\"#\">\r\n                <img src=\"/storage/imgFixa/facebook.png\" width=\"30\" height=\"30\" alt=\"\">\r\n            </a>\r\n            <a class=\"navbar-brand justify-content-end\" href=\"#\">\r\n                <img src=\"/storage/imgFixa/googleplus.png\" width=\"30\" height=\"30\" alt=\"\">\r\n            </a>\r\n            <a class=\"navbar-brand justify-content-end\" href=\"#\">\r\n                <img src=\"/storage/imgFixa/twitter.png\" width=\"30\" height=\"30\" alt=\"\">\r\n            </a>\r\n        </li>\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form-login/form-login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form-login/form-login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"mostrarAlert\">\r\n        Erro ao realizar o login\r\n    </div>\r\n    <div class=\"row\">   \r\n        <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\r\n            \r\n        </div>\r\n        \r\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">            \r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Endereço de Email</label>\r\n                <input [(ngModel)]=\"usuario.email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n                <small id=\"emailHelp\" class=\"form-text text-muted\">Nós nunca vamos compartilhar seu e-mail com mais ninguém.</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Password</label>\r\n                <input [(ngModel)]=\"usuario.senha\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n            </div>                \r\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"logar()\">Logar</button>            \r\n        </div>\r\n        \r\n        <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\r\n            \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form-produto/form-produto.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form-produto/form-produto.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"inputProduto\">Produto</label>\r\n            <input [(ngModel)]=\"produto.nome\" type=\"text\" class=\"form-control\" id=\"inputProduto\" placeholder=\"Mesa\">\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"inputPreco\">Preço</label>\r\n            <input [(ngModel)]=\"produto.preco\" type=\"text\" class=\"form-control\" id=\"inputPreco\" placeholder=\"250,00\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"inputDetalhes\">Detalhes</label>\r\n        <input [(ngModel)]=\"produto.detalhes\" type=\"text\" class=\"form-control\" id=\"inputDetalhes\" placeholder=\"O produto é...\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"inputModelo\">Modelo</label>\r\n        <input [(ngModel)]=\"produto.modelo\" type=\"text\" class=\"form-control\" id=\"inputModelo\" placeholder=\"Cardigã 7405\">\r\n    </div>\r\n    <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"inputMaterial\">Material</label>\r\n            <input [(ngModel)]=\"produto.material\" type=\"text\" class=\"form-control\" id=\"inputMaterial\" placeholder=\"Algodão\">\r\n        </div>\r\n        <div class=\"form-group col-md-4\">\r\n            <label for=\"inputLavagem\">Lavagem</label>\r\n            <input [(ngModel)]=\"produto.lavagem\" type=\"text\" class=\"form-control\" id=\"inputLavagem\" placeholder=\"Lavar na máquina\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-row\">\r\n        <div class=\"custom-file col-md-6\">\r\n            <input (change)=\"mudouarquivo($event)\" type=\"file\" class=\"custom-file-input\" id=\"validatedCustomFile\" required>\r\n            <label class=\"custom-file-label\" for=\"validatedCustomFile\">Escolha um arquivo de foto...</label>\r\n            <div class=\"invalid-feedback\">Adicionar arquivo de foto...</div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"form-row\">\r\n        <button (click)=\"salvar()\" type=\"submit\" class=\"btn btn-success\">Sign in</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!-- Inicio linha destaque   -->\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\r\n            <!-- Inicio barralateral -->\r\n            <nav id=\"sidebar\">\r\n                <form class=\"form-inline my-2 my-lg-0\">\r\n                    <input id=\"buscar\" class=\"busca form-control my-2 my-sm-0 m-2\" type=\"search\" placeholder=\"Search\"\r\n                        aria-label=\"Search\">\r\n                    <button class=\"buscar-botao btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n                </form>\r\n\r\n                <div class=\"sidebar-header\">\r\n                    <h2>Departamentos</h2>\r\n                </div>\r\n\r\n                <ul class=\"list-unstyled components\">\r\n                    <li class=\"active\"><a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\"\r\n                            class=\"dropdown-toggle\">Blusas e Camisas</a>\r\n                        <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n                            <li><a href=\"#\">Manga Curta</a></li>\r\n                            <li> <a href=\"#\">Manga Comprida</a> </li>\r\n                            <li><a href=\"#\">Camisa Social</a></li>\r\n                            <li><a href=\"#\">Camisa Casual</a></li>\r\n                        </ul>\r\n                    </li>\r\n\r\n                    <li><a href=\"#\">Calças</a></li>\r\n                    <li><a href=\"#\">Saias</a></li>\r\n                    <li> <a href=\"#\">Vestidos</a></li>\r\n                    <li> <a href=\"#\">Sapatos</a></li>\r\n                    <li> <a href=\"#\">Bolças e Carteiras</a></li>\r\n                    <li> <a href=\"#\">Acessórios</a></li>\r\n                </ul>\r\n            </nav>\r\n            <!-- Fim barralateral -->\r\n        </div>\r\n        <!-- Inicio img destaque -->\r\n        <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n            <img src=\"/storage/imgFixa/destaque-home.png\" class=\"img-fluid\" alt=\"Responsive image\">\r\n        </div>\r\n        <!-- Inicio img destaque -->\r\n    </div>\r\n    <!-- Fim linha destaque -->\r\n    <!-- Inicio mostra de produtos -->\r\n    <div class=\"row\">\r\n        <!-- Inicio da div novidades  -->\r\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 painel novidades\">\r\n            <h2>Novidades</h2>\r\n\r\n            <div class=\"row\">                \r\n                <!-- Inicio exemplo valido -->\r\n                <app-post-produto class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\" *ngFor=\"let p of postsProdutos\" [post]=\"p\"></app-post-produto>\r\n                <!--Fim exemplo valido -->                \r\n            </div>\r\n        </div>\r\n        <!-- Fim da div novidades  -->\r\n        <!-- Espaço -->\r\n        <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\"></div>\r\n        <!-- Fim Espaço -->\r\n        <!-- Inicio da div mais vendidos   -->\r\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 painel mais-vendidos\">\r\n            <h2>Mais Vendidos</h2>\r\n\r\n            <div class=\"row\">\r\n                <!-- Inicio exemplo valido -->\r\n                <app-post-produto class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\" *ngFor=\"let p of postsProdutos\" [post]=\"p\"></app-post-produto>\r\n                <!--Fim exemplo valido -->\r\n            </div>\r\n        </div>\r\n        <!-- Fim da div mais vendidos   -->\r\n    </div>\r\n    <!-- Fim mostra de produtos -->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-funcao/nav-funcao.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-funcao/nav-funcao.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <ul class=\"nav justify-content-center\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/produto\">Cadastrar Produto</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/cliente\">Cadastrar Cliente</a>\r\n        </li>        \r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <nav class=\"navbar-light bg-light\">\r\n        <ul class=\"nav nav-fill\">\r\n            <li class=\"nav-item navbar-brand\">\r\n                <figure class=\"figure\">\r\n                    <img src=\"/storage/imgFixa/logo.png\" class=\"figure-img img-fluid rounded\" alt=\"Logo\">            \r\n                </figure>  \r\n            </li>\r\n            <li class=\"nav-item\">                   \r\n                <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/login\">Sua Conta</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/sobre\">Sobre</a>\r\n            </li>            \r\n        </ul>\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post-produto/post-produto.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-produto/post-produto.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <a routerLink=\"/produtos/{{post.id}}\"> -->\r\n<a (click)=\"selecionar()\">\r\n    <figure class=\"figure\">\r\n        <img src=\"/storage/{{post.arquivo}}\" class=\"figure-img img-fluid rounded\" alt=\"Produto\">\r\n        <figcaption class=\"figure-caption\">{{post.nome}} por R$ {{post.preco}}</figcaption>\r\n    </figure>\r\n</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/produto/produto.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/produto/produto.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Início da classe produtos -->\r\n<div class=\"container produto\" *ngFor=\"let p of postProdutos\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n            <figure class=\"figure\">\r\n                <img src=\"/storage/{{p.arquivo}}\" class=\"figure-img img-fluid rounded\" alt=\"Produto\">\r\n            </figure>\r\n        </div>\r\n\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                    <h1>{{p.nome}}</h1>\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                    <p>por apenas R$ {{p.preco}}</p>\r\n                </div>\r\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                    <p>{{p.detalhes}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row detalhes\">\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th>Característica</th>\r\n                        <th>Detalhe</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>Modelo</td>\r\n                        <td>{{p.modelo}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Material</td>\r\n                        <td>{{p.material}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>Lavagem</td>\r\n                        <td>{{p.lavagem}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\r\n            <button (click)=\"salvar()\" type=\"submit\" class=\"comprar btn btn-success\">Comprar</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sobre/sobre.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sobre/sobre.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <img  src = \" /storage/imgFixa/logo.png \"  alt = \" Logo da Mirror Fashion \">\r\n\t<h1> Mirror Fashion </h1>\r\n\t<p>\r\n\t\tA <strong> Mirror Fashion </strong> é a maior empresa de comércio eletrônico no segmento de\r\n\t\tmoda em todo o mundo. Fundada em 1932, possui filiais em 124 países, sendo líder de\r\n\t\tmercado com mais de 90% de participação em 118 deles.\r\n\t</p>\r\n\t<p>\r\n\t\tNosso centro de distribuição fica em <strong> Jacarezinho, no Paraná </strong>.\r\n\t\tDe lá, saem 48 aviões que distribuem os produtos às casas do mundo todo. Nosso centro de distribuição:\r\n\t</p>\r\n\t<figure  id = \" centro-distribuicao \">\r\n\t\t<img  src = \"/storage/imgFixa/centro-distribuicao.png \"  alt = \" Foto do centro de distribuição da Mirror Fashion \">\r\n\t\t<figcaption> Centro de distribuição da Mirror Fashion </figcaption>\r\n\t</figure>\r\n\t<p>\r\n\t\tCompre suas roupas e acessórios na Mirror Fashion. Acesse <a  href = \" index.html \"> nossa loja </a> ou entre em contato\r\n\t\tse tiver dúvidas. Conheça também nossa <a  href = \" #historia \"> história </a> e nossos <a  href = \" #diferencias \"> diferenciais</a>.\r\n\t</p>\r\n\r\n\t<h2  id = \" historia \" > História </h2>\r\n\r\n\t<figure  id = \" familia-pelho \">\r\n\t\t<img  src = \"/storage/imgFixa/familia-pelho.jpg \"  alt = \" Foto da família Pelho \">\r\n\t\t<figcaption> Família Pelho </figcaption>\r\n\t</figure>\r\n\t<p>\r\n\t\tA fundação em 1932 ocorreu no momento da descoberta econômica do interior do Paraná. A\r\n\t\tfamília Pelho, tradicional da região, investiu todas as suas economias nessa nova\r\n\t\tiniciativa, revolucionária para a época. O fundador <em> Eduardo Simões Pelho </em>,\r\n\t\tdotado de particular visão administrativa, guiou os negócios da empresa durante mais\r\n\t\tde 50 anos, muitos deles ao lado do seu filho <em> ES Pelho Filho </em>, atual CEO.\r\n\t\tO nome da empresa é inspirado no nome da família.\r\n\t</p>\r\n\t<p>\r\n\t\tO crescimento da empresa foi praticamente instantâneo. Nos primeiros 5 anos, já atendia\r\n\t\t18 países. Bateu a marca de 100 países em apenas 15 anos de existência. Até hoje, já\r\n\t\tatendeu 740 milhões de usuários diferentes, em bilhões de diferentes pedidos.\r\n\t</p>\r\n\t<p>\r\n\t\tO crescimento em número de funcionários é também assombroso. Hoje, é a maior empregadora\r\n\t\tdo Brasil, mas mesmo após apenas 5 anos da sua existência, já possuía 30 mil funcionários.\r\n\t\tFora do Brasil, há 240 mil funcionários, além de 890 mil brasileiros em instalações\r\n\t\tJacarezinho e nos escritórios em todo país.\r\n\t</p>\r\n\t<p>\r\n\t\tDada a importância econômica da empresa para o Brasil, a família Pelho já recebeu diversos\r\n\t\tprêmios, homenagens e condecorações. Todos os presidentes do Brasil já visitaram as instalações\r\n\t\tda Mirror Fashion, além de presidentes da União Européia, Ásia e o\r\n\t\tsecretário-geral da ONU.\r\n\t</p>\r\n\r\n\t<h2  id = \" diferenciais \"> Diferenciais </h2>\r\n\t<ul>\r\n\t\t<li> Menor preço do varejo, garantido! </li>\r\n\t\t<li> Se você achar uma loja mais barata, leva o produto de graça! </li>\r\n\t\t<li> Pague em reais, dólares, euros ou bitcoins! </li>\r\n\t\t<li> Todas as compras com frete grátis para o mundo todo! </li>\r\n\t\t<li> Maior comércio eletrônico de moda do mundo! </li>\r\n\t\t<li> Atendimento via telefone, email, chat, Twitter, Facebook, carta, fax e telegrama! </li>\r\n\t\t<li> Presente em 124 países! </li>\r\n\t\t<li> Mais de um milhão de pessoas em todo o mundo! </li>\r\n\t</ul>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-login/form-login.component */ "./src/app/form-login/form-login.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cliente/cliente.component */ "./src/app/cliente/cliente.component.ts");
/* harmony import */ var _form_produto_form_produto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-produto/form-produto.component */ "./src/app/form-produto/form-produto.component.ts");
/* harmony import */ var _produto_produto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./produto/produto.component */ "./src/app/produto/produto.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_4__["FormLoginComponent"] },
    { path: 'produtos/:id', component: _produto_produto_component__WEBPACK_IMPORTED_MODULE_8__["ProdutoComponent"] },
    { path: 'sobre', component: _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__["SobreComponent"] },
    { path: 'cliente', component: _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_6__["ClienteComponent"] },
    { path: 'produto', component: _form_produto_form_produto_component__WEBPACK_IMPORTED_MODULE_7__["FormProdutoComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");



let AppComponent = class AppComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.title = 'MirrorFashion';
        this.mostrarMenu = false;
    }
    ngOnInit() {
        this.loginService.mostrarMenu.subscribe((mostrar) => this.mostrarMenu = mostrar);
    }
};
AppComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-login/form-login.component */ "./src/app/form-login/form-login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_produto_post_produto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post-produto/post-produto.component */ "./src/app/post-produto/post-produto.component.ts");
/* harmony import */ var _post_produtos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post-produtos.service */ "./src/app/post-produtos.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _nav_funcao_nav_funcao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-funcao/nav-funcao.component */ "./src/app/nav-funcao/nav-funcao.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cliente/cliente.component */ "./src/app/cliente/cliente.component.ts");
/* harmony import */ var _form_produto_form_produto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form-produto/form-produto.component */ "./src/app/form-produto/form-produto.component.ts");
/* harmony import */ var _produto_produto_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./produto/produto.component */ "./src/app/produto/produto.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
            _form_login_form_login_component__WEBPACK_IMPORTED_MODULE_9__["FormLoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _post_produto_post_produto_component__WEBPACK_IMPORTED_MODULE_11__["PostProdutoComponent"],
            _nav_funcao_nav_funcao_component__WEBPACK_IMPORTED_MODULE_14__["NavFuncaoComponent"],
            _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_15__["SobreComponent"],
            _cliente_cliente_component__WEBPACK_IMPORTED_MODULE_16__["ClienteComponent"],
            _form_produto_form_produto_component__WEBPACK_IMPORTED_MODULE_17__["FormProdutoComponent"],
            _produto_produto_component__WEBPACK_IMPORTED_MODULE_18__["ProdutoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ],
        providers: [
            _post_produtos_service__WEBPACK_IMPORTED_MODULE_12__["PostProdutosService"],
            _login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cliente/cliente.component.css":
/*!***********************************************!*\
  !*** ./src/app/cliente/cliente.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGUvY2xpZW50ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cliente/cliente.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cliente/cliente.component.ts ***!
  \**********************************************/
/*! exports provided: ClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteComponent", function() { return ClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario */ "./src/app/usuario.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");




let ClienteComponent = class ClienteComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.mostrarAlert = false;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]("", "");
    }
    ngOnInit() {
        this.loginService.mostrarAlert.subscribe(mostrar => this.mostrarAlert = mostrar);
    }
    salvar() {
        this.loginService.cadastrar(this.usuario);
        this.loginService.mostrarAlert.subscribe(mostrar => this.mostrarAlert = mostrar);
    }
};
ClienteComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
ClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cliente',
        template: __webpack_require__(/*! raw-loader!./cliente.component.html */ "./node_modules/raw-loader/index.js!./src/app/cliente/cliente.component.html"),
        styles: [__webpack_require__(/*! ./cliente.component.css */ "./src/app/cliente/cliente.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
], ClienteComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* nav{\r\n    width: 100%;\r\n    bottom: 0;\r\n    position: fixed;\r\n} */\r\n\r\nli a img{\r\n    height: 40px;\r\n    width: 40px;\r\n    display: block;\r\n}\r\n\r\n.navbar{\r\n    margin-top: 10px;\r\n    padding: 1.2rem 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7O0FBRUg7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbmF2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn0gKi9cclxuXHJcbmxpIGEgaW1ne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxLjJyZW0gMXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/form-login/form-login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/form-login/form-login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tbG9naW4vZm9ybS1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/form-login/form-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/form-login/form-login.component.ts ***!
  \****************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario */ "./src/app/usuario.ts");




let FormLoginComponent = class FormLoginComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.usuario = new _usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]("", "");
        this.mostrarAlert = false;
    }
    ngOnInit() {
    }
    logar() {
        this.loginService.logar(this.usuario.email, this.usuario.senha);
        this.loginService.mostrarAlert.subscribe((mostrar) => this.mostrarAlert = mostrar);
    }
};
FormLoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-login',
        template: __webpack_require__(/*! raw-loader!./form-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/form-login/form-login.component.html"),
        styles: [__webpack_require__(/*! ./form-login.component.css */ "./src/app/form-login/form-login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], FormLoginComponent);



/***/ }),

/***/ "./src/app/form-produto/form-produto.component.css":
/*!*********************************************************!*\
  !*** ./src/app/form-produto/form-produto.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tcHJvZHV0by9mb3JtLXByb2R1dG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/form-produto/form-produto.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-produto/form-produto.component.ts ***!
  \********************************************************/
/*! exports provided: FormProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProdutoComponent", function() { return FormProdutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-produtos.service */ "./src/app/post-produtos.service.ts");
/* harmony import */ var _postProduto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postProduto */ "./src/app/postProduto.ts");




let FormProdutoComponent = class FormProdutoComponent {
    constructor(produtoService) {
        this.produtoService = produtoService;
        this.produto = new _postProduto__WEBPACK_IMPORTED_MODULE_3__["PostProduto"]("", "", "", "", "", "");
        this.nomearquivo = '';
    }
    ngOnInit() {
    }
    mudouarquivo(event) {
        this.nomearquivo = event.target.files[0].name;
        this.arquivo = event.target.files[0];
    }
    salvar() {
        this.produtoService.salvar(this.produto, this.arquivo);
    }
};
FormProdutoComponent.ctorParameters = () => [
    { type: _post_produtos_service__WEBPACK_IMPORTED_MODULE_2__["PostProdutosService"] }
];
FormProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-produto',
        template: __webpack_require__(/*! raw-loader!./form-produto.component.html */ "./node_modules/raw-loader/index.js!./src/app/form-produto/form-produto.component.html"),
        styles: [__webpack_require__(/*! ./form-produto.component.css */ "./src/app/form-produto/form-produto.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_produtos_service__WEBPACK_IMPORTED_MODULE_2__["PostProdutosService"]])
], FormProdutoComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody{\r\n    font-family: 'Poppins', sans-serif;\r\n    color: #333333;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus{\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;   \r\n}\r\n\r\n#sidebar {\r\n    background: #ffff;\r\n    color: #333333;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    font-size: 100%;\r\n}\r\n\r\n.busca{\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.buscar-botao{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#sidebar h2{\r\n    padding: 10px;\r\n    font-size: 150%;\r\n}\r\n\r\n#sidebar.active{\r\n\tmargin-left: -250px;\r\n}\r\n\r\n#sidebar .sidebar-header{\r\n\tpadding: 5px;\r\n    background: #DCDCDC;\r\n    margin-top: 10px;\r\n}\r\n\r\n#sidebar ul li a{\r\n\tpadding: 10px;\r\n\tfont-size: 1.0em;\r\n    display: block;\r\n    border-bottom: 1px solid #DCDCDC;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n    color: #7386D5;\r\n    background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #333333;\r\n    background: #ffff;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #ffff;\r\n}\r\n\r\n.painel {\r\n    margin-top: 20px;\r\n    border-radius: 4px;\r\n    box-shadow: inset 1px 1px 4px #999;\r\n}\r\n\r\n.novidades {\r\n    float: left;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#F5DCDC), to(#BEBEF4));\r\n    background: linear-gradient(#F5DCDC, #BEBEF4);\r\n}\r\n\r\n.mais-vendidos {\r\n    float: right;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#DCDCF5), to(#F4BEBE));\r\n    background: linear-gradient(#DCDCF5, #F4BEBE);\r\n}\r\n\r\n.painel h2 {\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 10px;\r\n    text-shadow: 3px 3px 2px rgba(255,255,255,0.8);\r\n    padding-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFOztBQUU3RTtJQUNJLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUVBOzs7Q0FHQyxjQUFjO0NBQ2QscUJBQXFCO0lBQ2xCLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7SUFDYixjQUFjO0lBQ2QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVGQUE2QztJQUE3Qyw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUZBQTZDO0lBQTdDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFwiO1xyXG5cclxuYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1c3tcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgICBcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4uYnVzY2F7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idXNjYXItYm90YW97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciBoMntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZXtcclxuXHRtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXJ7XHJcblx0cGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0RDRENEQztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGF7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRmb250LXNpemU6IDEuMGVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RDRENEQztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzczODZENTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxyXG5hW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbn1cclxuXHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxudWwgdWwgYSB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG59XHJcblxyXG4ucGFpbmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDRweCAjOTk5O1xyXG59XHJcblxyXG4ubm92aWRhZGVzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNGNURDREMsICNCRUJFRjQpO1xyXG59XHJcblxyXG4ubWFpcy12ZW5kaWRvcyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI0RDRENGNSwgI0Y0QkVCRSk7XHJcbn1cclxuXHJcbi5wYWluZWwgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-produtos.service */ "./src/app/post-produtos.service.ts");



let HomeComponent = class HomeComponent {
    constructor(postProdutos) {
        this.postProdutos = postProdutos;
        this.postsProdutos = [];
    }
    ngOnInit() {
        this.postsProdutos = this.postProdutos.postsProduto;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _post_produtos_service__WEBPACK_IMPORTED_MODULE_2__["PostProdutosService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_produtos_service__WEBPACK_IMPORTED_MODULE_2__["PostProdutosService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginService = class LoginService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.usuarios = [];
        // private autenticador: boolean = false;
        this.mostrarMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mostrarAlert = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    logar(email, senha) {
        this.http.get("api/usuario/" + email + "/" + senha).subscribe((retorno) => {
            if (retorno == 200) {
                this.mostrarMenu.emit(true);
                this.mostrarAlert.emit(false);
                this.router.navigate(['/']);
            }
            else {
                this.mostrarAlert.emit(true);
                this.mostrarMenu.emit(false);
            }
        });
    }
    cadastrar(user) {
        const uploadUser = new FormData();
        uploadUser.append('email', user.email);
        uploadUser.append('senha', user.senha);
        uploadUser.append('nome', user.nome);
        uploadUser.append('cpf', user.cpf);
        this.http.post("/api/usuario", uploadUser, { reportProgress: true, observe: 'events' }).subscribe((event) => {
            /* if (event.headers.status === 200) {
              this.router.navigate(['/']);
            } */
            if (event.body == 200) {
                this.mostrarAlert.emit(false);
                this.router.navigate(['/']);
            }
            else {
                this.mostrarAlert.emit(true);
            }
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/nav-funcao/nav-funcao.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nav-funcao/nav-funcao.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1mdW5jYW8vbmF2LWZ1bmNhby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-funcao/nav-funcao.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nav-funcao/nav-funcao.component.ts ***!
  \****************************************************/
/*! exports provided: NavFuncaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavFuncaoComponent", function() { return NavFuncaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavFuncaoComponent = class NavFuncaoComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavFuncaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-funcao',
        template: __webpack_require__(/*! raw-loader!./nav-funcao.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-funcao/nav-funcao.component.html"),
        styles: [__webpack_require__(/*! ./nav-funcao.component.css */ "./src/app/nav-funcao/nav-funcao.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavFuncaoComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    margin-bottom: 10px;\r\n}\r\n\r\nfigure{\r\n    margin-top: 20px;\r\n}\r\n\r\na{\r\n    font-size: 1.6em;\r\n    margin-top: 40px;\r\n    color: black;\r\n}\r\n\r\na:hover{\r\n    color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmZpZ3VyZXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavComponent);



/***/ }),

/***/ "./src/app/post-produto/post-produto.component.css":
/*!*********************************************************!*\
  !*** ./src/app/post-produto/post-produto.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "figure:hover {    \r\n    box-shadow: 0 0 5px #333;\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n    -webkit-transition: 0.7s;\r\n    transition: 0.7s;\r\n}\r\n\r\nfigcaption {\r\n    color: #333;\r\n    padding-bottom: 8px;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1wcm9kdXRvL3Bvc3QtcHJvZHV0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LXByb2R1dG8vcG9zdC1wcm9kdXRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWd1cmU6aG92ZXIgeyAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzMzMztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb24ge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/post-produto/post-produto.component.ts":
/*!********************************************************!*\
  !*** ./src/app/post-produto/post-produto.component.ts ***!
  \********************************************************/
/*! exports provided: PostProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProdutoComponent", function() { return PostProdutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _postProduto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../postProduto */ "./src/app/postProduto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_produtos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-produtos.service */ "./src/app/post-produtos.service.ts");





let PostProdutoComponent = class PostProdutoComponent {
    // @Output() recebePoste: PostProduto = this.post;
    constructor(router, produtoService) {
        this.router = router;
        this.produtoService = produtoService;
    }
    ngOnInit() {
    }
    selecionar() {
        this.produtoService.mandarId(this.post.id);
        this.router.navigate(['/produtos/' + this.post.id]);
    }
};
PostProdutoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _post_produtos_service__WEBPACK_IMPORTED_MODULE_4__["PostProdutosService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _postProduto__WEBPACK_IMPORTED_MODULE_2__["PostProduto"])
], PostProdutoComponent.prototype, "post", void 0);
PostProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-produto',
        template: __webpack_require__(/*! raw-loader!./post-produto.component.html */ "./node_modules/raw-loader/index.js!./src/app/post-produto/post-produto.component.html"),
        styles: [__webpack_require__(/*! ./post-produto.component.css */ "./src/app/post-produto/post-produto.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _post_produtos_service__WEBPACK_IMPORTED_MODULE_4__["PostProdutosService"]])
], PostProdutoComponent);



/***/ }),

/***/ "./src/app/post-produtos.service.ts":
/*!******************************************!*\
  !*** ./src/app/post-produtos.service.ts ***!
  \******************************************/
/*! exports provided: PostProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProdutosService", function() { return PostProdutosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _postProduto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postProduto */ "./src/app/postProduto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let PostProdutosService = class PostProdutosService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.postsProduto = [];
        this.postProduto = [];
        this.enviarId = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.http.get("/api/").subscribe((posts) => {
            for (let p of posts) {
                this.postsProduto.push(new _postProduto__WEBPACK_IMPORTED_MODULE_3__["PostProduto"](p.nome, p.preco, p.detalhes, p.modelo, p.material, p.lavagem, p.arquivo, p.id));
            }
        });
    }
    salvar(postProduto, file) {
        const uploadData = new FormData();
        uploadData.append('nome', postProduto.nome);
        uploadData.append('preco', postProduto.preco);
        uploadData.append('detalhes', postProduto.detalhes);
        uploadData.append('modelo', postProduto.modelo);
        uploadData.append('material', postProduto.material);
        uploadData.append('lavagem', postProduto.lavagem);
        uploadData.append('arquivo', file, file.name);
        this.http.post("/api/produto", uploadData, { reportProgress: true, observe: 'events' }).subscribe((event) => {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
                let p = event.body;
                this.postsProduto.push(new _postProduto__WEBPACK_IMPORTED_MODULE_3__["PostProduto"](p.nome, p.preco, p.detalhes, p.modelo, p.material, p.lavagem, p.arquivo, p.id));
                this.router.navigate(['/']);
            }
        });
    }
    mandarId(id) {
        this.enviarId.next(id);
    }
    buscar(id) {
        this.postProduto.splice(0);
        this.http.get("/api/produto/" + id).subscribe((p) => {
            this.postProduto.push(new _postProduto__WEBPACK_IMPORTED_MODULE_3__["PostProduto"](p.nome, p.preco, p.detalhes, p.modelo, p.material, p.lavagem, p.arquivo, p.id));
        });
    }
};
PostProdutosService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostProdutosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PostProdutosService);



/***/ }),

/***/ "./src/app/postProduto.ts":
/*!********************************!*\
  !*** ./src/app/postProduto.ts ***!
  \********************************/
/*! exports provided: PostProduto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProduto", function() { return PostProduto; });
class PostProduto {
    constructor(nome, preco, detalhes, modelo, material, lavagem, arquivo, id) {
        this.nome = nome;
        this.preco = preco;
        this.detalhes = detalhes;
        this.modelo = modelo;
        this.material = material;
        this.lavagem = lavagem;
        this.arquivo = arquivo;
        this.id = id;
    }
}
PostProduto.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/produto/produto.component.css":
/*!***********************************************!*\
  !*** ./src/app/produto/produto.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".produto {\r\n    color: #333;\r\n    line-height: 1.3;\r\n    margin-top: 2em;\r\n}\r\n\r\nh1 {\r\n    font-size: 4.0em;\r\n    font-weight: bold;\r\n}\r\n\r\np {\r\n    font-size: 2.0em;\r\n    font-style: italic;\r\n    margin-bottom: 1em;\r\n}\r\n\r\nfigure{\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\nimg{\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\n.comprar {\r\n    font-size: 1.4em;\r\n    text-transform: uppercase;\r\n    box-shadow: 0 1px 3px #777;\r\n    display: block;\r\n    padding: 0.5em 1em;\r\n    margin: 1em 0;\r\n}\r\n\r\n.detalhes {\r\n    padding: 2em 0;\r\n}\r\n\r\ntable {\r\n    font-size: 1.2em;\r\n    border-spacing: 0.2em;\r\n    border-collapse: separate;\r\n}\r\n\r\nthead {\r\n    background-color: #999;\r\n}\r\n\r\nthead th {\r\n    font-weight: bold;\r\n    padding: 0.3em 1em;\r\n    text-align: center;\r\n}\r\n\r\ntd {\r\n    padding: 0.3em;\r\n}\r\n\r\ntr:nth-child(2n) {\r\n    background-color: #CCC;\r\n}\r\n\r\ntd:first-child {\r\n    font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHV0by9wcm9kdXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJvZHV0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1dG8ge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDQuMGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuZmlndXJle1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG4uY29tcHJhciB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAjNzc3O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG59XHJcblxyXG4uZGV0YWxoZXMge1xyXG4gICAgcGFkZGluZzogMmVtIDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBib3JkZXItc3BhY2luZzogMC4yZW07XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG50aGVhZCB0aCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZzogMC4zZW07XHJcbn1cclxuXHJcbnRyOm50aC1jaGlsZCgybikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcclxufVxyXG5cclxudGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/produto/produto.component.ts":
/*!**********************************************!*\
  !*** ./src/app/produto/produto.component.ts ***!
  \**********************************************/
/*! exports provided: ProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function() { return ProdutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _post_produtos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-produtos.service */ "./src/app/post-produtos.service.ts");



let ProdutoComponent = class ProdutoComponent {
    constructor(produtoService) {
        this.produtoService = produtoService;
        this.postProdutos = [];
        this.produtoService.enviarId.asObservable().subscribe((valor) => {
            this.numID = valor;
        });
    }
    ngOnInit() {
        this.produtoService.buscar(this.numID);
        this.postProdutos = this.produtoService.postProduto;
    }
};
ProdutoComponent.ctorParameters = () => [
    { type: _post_produtos_service__WEBPACK_IMPORTED_MODULE_2__["PostProdutosService"] }
];
ProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produto',
        template: __webpack_require__(/*! raw-loader!./produto.component.html */ "./node_modules/raw-loader/index.js!./src/app/produto/produto.component.html"),
        styles: [__webpack_require__(/*! ./produto.component.css */ "./src/app/produto/produto.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_produtos_service__WEBPACK_IMPORTED_MODULE_2__["PostProdutosService"]])
], ProdutoComponent);



/***/ }),

/***/ "./src/app/sobre/sobre.component.css":
/*!*******************************************!*\
  !*** ./src/app/sobre/sobre.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    color: #333333;\r\n    font-family: \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n\r\nh1{\r\n    /* background-image: url(../img/sobre-background.jpg); */\r\n    padding: 10px;\r\n}\r\n\r\nh2{\r\n    border-bottom: 2px solid #333333;\r\n    margin-top: 30px;\r\n}\r\n\r\np{\r\n    padding: 0 45px;\r\n    text-indent: 15px;\r\n}\r\n\r\nfigure{\r\n    background-color: #F2EDED;\r\n    border: 1px solid #ccc;\r\n    text-align: center;\r\n    padding: 15px;\r\n    margin: 30px;\r\n}\r\n\r\nfigcaption{\r\n    font-style: italic;\r\n    margin-top: 10px;\r\n}\r\n\r\n#centro-distribuicao{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 550px;\r\n}\r\n\r\n#rodape {\r\n    color: #777;\r\n    margin: 30px 0;\r\n    padding: 30px 0;\r\n}\r\n\r\n#rodape img {\r\n    margin-right: 30px;\r\n    vertical-align: middle;\r\n    width: 94px;\r\n}\r\n\r\n#familia-pelho {\r\n    float: right;\r\n    margin: 0 0 10px 10px;\r\n}\r\n\r\np::first-letter {\r\n    font-weight: bold;\r\n}\r\n\r\nh1 + p {\r\n    text-indent: 0;\r\n}\r\n\r\np::first-line {\r\n    font-variant: small-caps;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29icmUvc29icmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrREFBK0Q7QUFDbkU7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NvYnJlL3NvYnJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMXtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvc29icmUtYmFja2dyb3VuZC5qcGcpOyAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMzMzMztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBwYWRkaW5nOiAwIDQ1cHg7XHJcbiAgICB0ZXh0LWluZGVudDogMTVweDtcclxufVxyXG5maWd1cmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFREVEO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbmZpZ2NhcHRpb257XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jY2VudHJvLWRpc3RyaWJ1aWNhb3tcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG59XHJcblxyXG4jcm9kYXBlIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbiNyb2RhcGUgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogOTRweDtcclxufVxyXG5cclxuI2ZhbWlsaWEtcGVsaG8ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcblxyXG5wOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgxICsgcCB7XHJcbiAgICB0ZXh0LWluZGVudDogMDtcclxufVxyXG5cclxucDo6Zmlyc3QtbGluZSB7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SobreComponent = class SobreComponent {
    constructor() { }
    ngOnInit() {
    }
};
SobreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sobre',
        template: __webpack_require__(/*! raw-loader!./sobre.component.html */ "./node_modules/raw-loader/index.js!./src/app/sobre/sobre.component.html"),
        styles: [__webpack_require__(/*! ./sobre.component.css */ "./src/app/sobre/sobre.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SobreComponent);



/***/ }),

/***/ "./src/app/usuario.ts":
/*!****************************!*\
  !*** ./src/app/usuario.ts ***!
  \****************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
    constructor(email, senha, cpf, nome, id) {
        this.cpf = cpf;
        this.nome = nome;
        this.id = id;
        this.email = email;
        this.senha = senha;
    }
}
Usuario.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anderson\Documents\ProjetoAngularFinal\Lar_Angular_Final\resources\meuapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map