import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';


const MyPDF =({ titre1,titre2,titre3,titre4,titre5,titre6,titre7, input1, check, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14, input15, input16, input17, input18, input19, input20, input21, input22, input23, input24, input25, input26, input27, input28, input29, input30, input31, input32, input33, input34, input35, input36, input37, input38, input39, input40, input41, input42, input43, input44, input45, input46, input47, input48, input49, input50, input51, input52, input53, input54, input55, input56, input57, input58,input59,


  check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11, check12, check13, check14, check15, check16, check17, check18, check19, check20, check21, check22, check23, check24, check25, check26, check27, check28, check29, check30, check31, check32, check33, check34, check35, check36, check37, check38, check39, check40, check41, check42, check43, check44, check45, check46, check47, check48, check49, check50, check51})  => {

  return (
  
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <Document>
      <Page >
   <Text  style={{   
    fontWeight: 'bold',
    marginBottom: 10 ,borderLeft: '3px solid black', paddingLeft:200}} > Résumé facteurs</Text>
        <Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,  color: '#008000' ,borderLeft: '3px solid black', paddingLeft:20 }}>L'erreur est-elle liée à des facteurs propres aux patients ? :{titre1}</Text>

        <Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>L'état de santé du patient est-il grave,complexe ? :{input1}</Text>
        <Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check}</Text>

        <Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>L'EI est-il survenu dans un contexte de prise en charge en urgence ?{input2}</Text>
        <Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check1}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>L'expression du patient ou la communication étaient-elles difficiles ?{input3}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check2}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La personnalité du patient est-elle particulière et peut-elle expliquer en partie le dysfonctionnement ?{input4}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check3}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Existe-t-il des facteurs sociaux particuliers suceptibles d'expliquer tout ou partie des dysfonctionnements ?{input5}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check4}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Autre ?{input6}</Text>

<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,  color: '#008000',borderLeft: '3px solid black', paddingLeft:20}}>L'erreur est-elle liée à des facteurs individuels ?:{titre2}</Text>

<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il un défaut de qualification des personnes chargées du soin / de l'acte ?{input7}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check5}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il un défaut de connaissances théoriques ou techniques des professionnels ?{input8}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check6}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il un défaut d'aptitude,de compétence des professionnels chargés du soin / de l'acte ?{input9}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check7}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les professionnels chargés des soins étaient-ils en mauvaise disposition physique et mentale ?{input10}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check8}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il eu une insuffisance d'échange d'information entre les professionnels de santé et le patient ?{input11}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check9}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il eu une insuffisance d'échange d'information entre les professionnels de santé et la famille du patient ?{input12}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check10}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>A-t-on relevé un défaut de qualité de la relation avec le patient et sa famille ?{input13}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check11}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Autre ?{input14}</Text>


<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,  color: '#008000',borderLeft: '3px solid black', paddingLeft:20}}>L'erreur est-elle liée à des facteurs concernant l'équipe ?:{titre3}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La composition de l'équipe chargée du soin était-elle mauvaise ou inadaptée ?{input15}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check12}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>A-t-on relevé un défaut de communication interne orale et/ou écrite au sein de l'équipe ?{input16}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check13}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>A-t-on relevé une collaboration insuffisante entre professionnels ?{input17}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check14}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Existe-t-il des conflits ou une mauvaise ambiance au sein de l'équipe / un défaut de cohésion ?{input18}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check15}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La supervision des responsables et des autres personnels a-t-elle été inadéquate ?{input19}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check16}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y'a-t-il un manque ou un défaut de recherche d'aide,d'avis,de collaboration ?{input20}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check17}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Autre?{input21}</Text>




<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,  color: '#008000',borderLeft: '3px solid black', paddingLeft:20}}>L'erreur est-elle liée à des tâche à accomplir ? :{titre4}</Text>

<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Le(s) protocole(s) étaient-ils absents ?{input22}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}} >Cela était-il évitable? :{check18}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Le(s) protocole(s), procédure(s) étaient-ils inadaptés ou peu compréhensibles ?{input23}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}> Cela était-il évitable? :{check19}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Le(s) protocole(s), procédure(s) étaient-ils indisponibles au moment de survenue de l'événement ?{input24}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}} >Cela était-il évitable? :{check20}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Le(s) protocole(s), procédure(s) étaient-ils inutilisables ?{input25}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check21}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Le(s) protocole(s), procédure(s) étaient-ils insuffisamment diffusés et/ou connus ? {input26}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check22}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il un retard dans la prestation ou la programmation des examens cliniques et paracliniques ?{input27}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check23}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il eu un défaut d'accessibilité,de disponibilité de l'information en temps voulu ?{input28}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check24}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La recherche d'information auprès d'un autre professionnel a-t-elle été difficile ?{input29}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check25}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La planification des tâches était-elle inadaptée ?{input30}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check26}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les soins/actes ne relevaient-ils pas du champ de compétence,d'activité du service ? {input31}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check27}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Le(s) protocoles(s), procédure(s) n'ont-ils pas été respectés ?{input32}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check28}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Autre?{input33}</Text>




<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,  color: '#008000',borderLeft: '3px solid black', paddingLeft:20}}>L'erreur est-elle liée à des facteurs concernant l'environnement ?:{titre5}</Text>


<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les locaux ou le matériel utilisé étaient-ils inadaptés ou indisponibles ?{input34}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check29}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les fournitures ou équipements étaient-ils défectueux,mal entretenus ?{input35}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check30}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les fornitures ou équipements étaient-ils inexistants ?{input36}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check31}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les fournitures ou équipements ont-ils été mal utilisés ? {input37}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check32}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les supports d'information, les notices d'utilisation étaient-ils indisponibles ou inadaptés ?{input38}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check33}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La formation ou entrainement des professionnels étaient-ils inexistants,inadaptés, non réalisés ?{input39}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check34}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les conditions de travail étaient-elles inadaptées ? {input40}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check35}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La charge de travail était-elle importante au moment de l'événement ?{input41}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check36}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Autre ? {input42}</Text>


<Text  style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,  color: '#008000',borderLeft: '3px solid black', paddingLeft:20}}>L'erreur est-elle liée à des facteurs concernant l'organisation ?:{titre6}</Text>

<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il eu un changement récent d'organisation interne ? {input43}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check37}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il une limitation trop restrictive de la prise de décision des acteurs du terrain ? {input44}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check38}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les responsabilités et les tâches étaient-elles non ou mal définies ?{input45}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check39}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il eu un défaut de coordination dans le service ?{input46}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check40}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il eu un défaut de coordination entre les services,les structures ?{input47}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check41}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Y a-t-il eu un défaut d'adaptation à une situation imprévue ?{input48}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check42}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La gestion des ressources humaines était-elle inadéquate ? {input49}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check43}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La procédure de sortie était-elle inadéquate ?{input50}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check44}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Autre ? {input51}</Text>



<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,  color: '#008000', borderLeft: '3px solid black', paddingLeft:20}}>L'erreur est-elle liée à des facteurs concernant le contexte institutionnel ?:{titre7}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les contraintes financières au niveau de l'établissement sont-elles à l'origine de l'événement ? {input52}</Text>


<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les ressources sanitaires sont-elles insuffisantes, inadaptées ou défectueuses ? {input53}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check45}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Les échanges ou relations avec d'autres structures de soins sont-ils faibles ou difficiles ? {input54}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check46}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Peut-on relever une absence de stratégie,politique/une absence de priorité/ou des stratégies contradictoires ou inadaptées ? {input55}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check47}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La sécurité et gestion des risques ne sont-elles pas perçues comme des objectifs importants ? {input56}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check48}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>La culture du signalement des EI et de propositions de corrections est-elle inexistante ou défectueuse ? {input57}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check49}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Le contexte social était-il difficile ?{input58}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Cela était-il évitable? :{check50}</Text>
<Text style={{   fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,borderLeft: '3px solid black', paddingLeft:20}}>Autre ? {input51}</Text>
        
      </Page>
    </Document>
  </PDFViewer>

  );
};


export default MyPDF;