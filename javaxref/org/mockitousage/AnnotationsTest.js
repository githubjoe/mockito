defineStructure(
"AnnotationsTest",function(factory){with(factory) { typeTable(["org.mockito.Mockito","cl"],["java.util.HashMap","cl"],["java.util.List","it"],["java.util.Map","it"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.MockitoAnnotations","cl"],["org.mockito.TestBase","cl"],["org.mockito.MockitoAnnotations$Mock","st an"],["org.mockito.exceptions.base.MockitoException","cl"],["org.mockitousage.AnnotationsTest","cl"],["java.lang.SuppressWarnings","an"],["java.lang.Object","cl"],["java.lang.Exception","cl"],["junit.framework.Assert","cl"],["java.lang.String","cl"],["java.lang.Throwable","cl"],["org.mockitousage.AnnotationsTest$Sub","cl"],["org.mockitousage.AnnotationsTest$Base","cl"],["org.mockitousage.AnnotationsTest$SuperBase","cl"],["org.mockitousage.AnnotationsTest$Base2","cl"],["org.mockitousage.IMethods","it"]),methodTable([1,"HashMap",[],"co"],[10,"setup",[],"me"],[6,"initMocks",[12],"st me"],[10,"shouldInitMocks",[],"me"],[2,"clear",[],"me"],[3,"clear",[],"me"],[0,"verify",[12],"st me"],[10,"shouldScreamWhenInitializingMocksForNullClass",[],"me"],[14,"fail",[],"st me"],[14,"assertEquals",[15,15],"st me"],[16,"getMessage",[],"me"],[10,"shouldLookForAnnotatedMocksInSuperClasses",[],"me"],[17,"Sub",[],"co"],[14,"assertNotNull",[12],"st me"],[17,"getMock",[],"me"],[18,"getBaseMock",[],"me"],[19,"getSuperBaseMock",[],"me"],[20,"getBaseMock",[],"me"]),localVariableTable(["e","shouldScreamWhenInitializingMocksForNullClass()-e"],["sub","shouldLookForAnnotatedMocksInSuperClasses()-sub"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,nl,ip," java.util.",T(1),";",nl,ip," java.util.",T(2),";",nl,ip," java.util.",T(3),";",nl,nl,ip," org.junit.",T(4),";",nl,ip," org.junit.",T(5),";",nl,ip," org.mockito.",T(6),";",nl,ip," org.mockito.",T(7),";",nl,ip," org.mockito.",T(6),".",T(8),";",nl,ip," org.mockito.exceptions.base.",T(9),";",nl,nl,C(10,[],$("@",T(11),P(L("\"unchecked\"")),nl,pu,_,c,_,I("AnnotationsTest"),_,ex,_,T(7),_,B(nl,nl,w(4),F("@",T(8),_,T(2),_,I("list"),";"),nl,w(4),F("@",T(8),_,f,_,T(3),_,I("map")," = ",n,_,N(0),P(),";"),nl,w(4),O("//TODO shall I bother deprecating @MockitoAnnotations.Mock and refactor annotation to own file?"),nl,w(4),O("//TODO don't use cglib-nodep, have all jars separate"),nl,w(4),nl,w(4),M(1,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("setup"),P(),_,B(nl,w(8),T(6),".",N(2),P(t),";",nl,w(4)))),nl,w(4),nl,w(4),M(3,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldInitMocks"),P(),_,ts,_,T(13),_,B(nl,w(8),G(10,"fi","list"),".",N(4),P(),";",nl,w(8),G(10,"fi","map"),".",N(5),P(),";",nl,w(8),nl,w(8),N(6),P(G(10,"fi","list")),".",N(4),P(),";",nl,w(8),N(6),P(G(10,"fi","map")),".",N(5),P(),";",nl,w(4)))),nl,w(4),nl,w(4),M(7,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldScreamWhenInitializingMocksForNullClass"),P(),_,ts,_,T(13),_,B(nl,w(8),tr,_,B(nl,w(12),T(6),".",N(2),P(L("null")),";",nl,w(12),N(8),P(),";",nl,w(8)),_,ct,_,P(V(0,$(T(9),_,I("e")))),_,B(nl,w(12),N(9),P(L("\"testClass cannot be null. For info how to use @Mock annotations see examples in javadoc for MockitoAnnotations class\""),",",nl,w(20),W(0),".",N(10),P()),";",nl,w(8)),nl,w(4)))),nl,w(4),nl,w(4),M(11,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldLookForAnnotatedMocksInSuperClasses"),P(),_,ts,_,T(13),_,B(nl,w(8),V(1,$(T(17),_,I("sub")," = ",n,_,N(12),P(),";")),nl,w(8),T(6),".",N(2),P(W(1)),";",nl,w(8),nl,w(8),N(13),P(W(1),".",N(14),P()),";",nl,w(8),N(13),P(W(1),".",N(15),P()),";",nl,w(8),N(13),P(W(1),".",N(16),P()),";",nl,w(4)))),nl,w(4),nl,w(4),C(19,[18,20],$(c," SuperBase ",B(nl,w(8),F("@",T(8),_,pi,_,T(21),_,I("mock"),";"),nl,w(8),nl,w(8),M(16,[],[],$(pu,_,T(21),_,I("getSuperBaseMock"),P(),_,B(nl,w(12),r,_,G(19,"fi","mock"),";",nl,w(8)))),nl,w(4)))),nl,w(4),nl,w(4),C(18,[17],$(c," Base ",ex,_,T(19),_,B(nl,w(8),F("@",T(8),_,pi,_,T(21),_,I("mock"),";"),nl,w(8),nl,w(8),M(15,[],[],$(pu,_,T(21),_,I("getBaseMock"),P(),_,B(nl,w(12),r,_,G(18,"fi","mock"),";",nl,w(8)))),nl,w(4)))),nl,w(4),nl,w(4),C(20,[],$(c," Base2 ",ex,_,T(19),_,B(nl,w(8),F("@",T(8),_,pi,_,T(21),_,I("mock"),";"),nl,w(8),nl,w(8),M(17,[],[],$(pu,_,T(21),_,I("getBaseMock"),P(),_,B(nl,w(12),r,_,G(20,"fi","mock"),";",nl,w(8)))),nl,w(4)))),nl,w(4),nl,w(4),C(17,[],$(c," Sub ",ex,_,T(18),_,B(nl,w(8),F("@",T(8),_,pi,_,T(21),_,I("mock"),";"),nl,w(8),nl,w(8),M(14,[],[],$(pu,_,T(21),_,I("getMock"),P(),_,B(nl,w(12),r,_,G(17,"fi","mock"),";",nl,w(8)))),nl,w(4)))),nl))));}});