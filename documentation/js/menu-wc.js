'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pinduoduo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b9c33c615e71e4249b45e660bcd6ca37"' : 'data-target="#xs-components-links-module-AppModule-b9c33c615e71e4249b45e660bcd6ca37"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b9c33c615e71e4249b45e660bcd6ca37"' :
                                            'id="xs-components-links-module-AppModule-b9c33c615e71e4249b45e660bcd6ca37"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link">CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoryModule-05a4c82386820f99eafe51ff0c91906e"' : 'data-target="#xs-components-links-module-CategoryModule-05a4c82386820f99eafe51ff0c91906e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-05a4c82386820f99eafe51ff0c91906e"' :
                                            'id="xs-components-links-module-CategoryModule-05a4c82386820f99eafe51ff0c91906e"' }>
                                            <li class="link">
                                                <a href="components/CategoryContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryRoutingModule.html" data-type="entity-link">CategoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link">ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChatModule-4b8266c176b0e16f50a15dd94e226ed3"' : 'data-target="#xs-components-links-module-ChatModule-4b8266c176b0e16f50a15dd94e226ed3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChatModule-4b8266c176b0e16f50a15dd94e226ed3"' :
                                            'id="xs-components-links-module-ChatModule-4b8266c176b0e16f50a15dd94e226ed3"' }>
                                            <li class="link">
                                                <a href="components/ChatContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatRoutingModule.html" data-type="entity-link">ChatRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DialogModule.html" data-type="entity-link">DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' : 'data-target="#xs-components-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' :
                                            'id="xs-components-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' }>
                                            <li class="link">
                                                <a href="components/DialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' : 'data-target="#xs-directives-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' :
                                        'id="xs-directives-links-module-DialogModule-266229b1070632b1c8e42916fb671a5c"' }>
                                        <li class="link">
                                            <a href="directives/CloseDialogDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">CloseDialogDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-ff4b1292270b40fe5c099873f69566c5"' : 'data-target="#xs-components-links-module-HomeModule-ff4b1292270b40fe5c099873f69566c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-ff4b1292270b40fe5c099873f69566c5"' :
                                            'id="xs-components-links-module-HomeModule-ff4b1292270b40fe5c099873f69566c5"' }>
                                            <li class="link">
                                                <a href="components/HomeContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MyModule.html" data-type="entity-link">MyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MyModule-0c472e12d0f07beabd89837d5f40dbf1"' : 'data-target="#xs-components-links-module-MyModule-0c472e12d0f07beabd89837d5f40dbf1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MyModule-0c472e12d0f07beabd89837d5f40dbf1"' :
                                            'id="xs-components-links-module-MyModule-0c472e12d0f07beabd89837d5f40dbf1"' }>
                                            <li class="link">
                                                <a href="components/MyContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MyRoutingModule.html" data-type="entity-link">MyRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link">ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductModule-f03f9cc95dc6872373b6758c3618d861"' : 'data-target="#xs-components-links-module-ProductModule-f03f9cc95dc6872373b6758c3618d861"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-f03f9cc95dc6872373b6758c3618d861"' :
                                            'id="xs-components-links-module-ProductModule-f03f9cc95dc6872373b6758c3618d861"' }>
                                            <li class="link">
                                                <a href="components/ConfirmOrderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupShortListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupShortListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PaymentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaymentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link">ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RecommendModule.html" data-type="entity-link">RecommendModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RecommendModule-e7a852abd2b9a792d7557016e64aaeaa"' : 'data-target="#xs-components-links-module-RecommendModule-e7a852abd2b9a792d7557016e64aaeaa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecommendModule-e7a852abd2b9a792d7557016e64aaeaa"' :
                                            'id="xs-components-links-module-RecommendModule-e7a852abd2b9a792d7557016e64aaeaa"' }>
                                            <li class="link">
                                                <a href="components/RecommendContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecommendContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecommendRoutingModule.html" data-type="entity-link">RecommendRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' : 'data-target="#xs-components-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' :
                                            'id="xs-components-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' }>
                                            <li class="link">
                                                <a href="components/BackButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BackButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CountDownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountDownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HorizontalGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HorizontalGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageSliderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductAmountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductAmountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductTileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductVariantDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductVariantDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScrollableTabComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollableTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VerticalGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VerticalGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' : 'data-target="#xs-directives-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' :
                                        'id="xs-directives-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' }>
                                        <li class="link">
                                            <a href="directives/AvatarDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AvatarDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/GridItemDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridItemDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/GridItemImageDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridItemImageDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/GridItemTitleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridItemTitleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TagDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' : 'data-target="#xs-pipes-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' :
                                            'id="xs-pipes-links-module-SharedModule-7f24681058e6497b8d6cca704a1a2868"' }>
                                            <li class="link">
                                                <a href="pipes/AgoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgoPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BackButtonComponent.html" data-type="entity-link">BackButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryContainerComponent.html" data-type="entity-link">CategoryContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChatContainerComponent.html" data-type="entity-link">ChatContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmOrderComponent.html" data-type="entity-link">ConfirmOrderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CountDownComponent.html" data-type="entity-link">CountDownComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DialogComponent.html" data-type="entity-link">DialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link">FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GroupItemComponent.html" data-type="entity-link">GroupItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GroupShortListComponent.html" data-type="entity-link">GroupShortListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeContainerComponent.html" data-type="entity-link">HomeContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeDetailComponent.html" data-type="entity-link">HomeDetailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HorizontalGridComponent.html" data-type="entity-link">HorizontalGridComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageSliderComponent.html" data-type="entity-link">ImageSliderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyContainerComponent.html" data-type="entity-link">MyContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentComponent.html" data-type="entity-link">PaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductAmountComponent.html" data-type="entity-link">ProductAmountComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCardComponent.html" data-type="entity-link">ProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductContainerComponent.html" data-type="entity-link">ProductContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductTileComponent.html" data-type="entity-link">ProductTileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductVariantDialogComponent.html" data-type="entity-link">ProductVariantDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecommendContainerComponent.html" data-type="entity-link">RecommendContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ScrollableTabComponent.html" data-type="entity-link">ScrollableTabComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerticalGridComponent.html" data-type="entity-link">VerticalGridComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/AvatarDirective.html" data-type="entity-link">AvatarDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/CloseDialogDirective.html" data-type="entity-link">CloseDialogDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/GridItemDirective.html" data-type="entity-link">GridItemDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/GridItemImageDirective.html" data-type="entity-link">GridItemImageDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/GridItemTitleDirective.html" data-type="entity-link">GridItemTitleDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/TagDirective.html" data-type="entity-link">TagDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DialogService.html" data-type="entity-link">DialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DomService.html" data-type="entity-link">DomService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link">HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyService.html" data-type="entity-link">MyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link">OrderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/NotificationInterceptor.html" data-type="entity-link">NotificationInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/ParamInterceptor.html" data-type="entity-link">ParamInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Ad.html" data-type="entity-link">Ad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Channel.html" data-type="entity-link">Channel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChildConfig.html" data-type="entity-link">ChildConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogPos.html" data-type="entity-link">DialogPos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupOrder.html" data-type="entity-link">GroupOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageSlider.html" data-type="entity-link">ImageSlider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Payment.html" data-type="entity-link">Payment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductVariant.html" data-type="entity-link">ProductVariant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Profile.html" data-type="entity-link">Profile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TabItem.html" data-type="entity-link">TabItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopMenu.html" data-type="entity-link">TopMenu</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/AgoPipe.html" data-type="entity-link">AgoPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});