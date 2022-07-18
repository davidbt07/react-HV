import { EnterpriseCard } from 'components/EnterpriseCard';
import { GeneralInfo } from 'components/GeneralInfo';
import React from 'react';

export const Experience = () => (
  <div className='flex flex-col gap-12 border-bottom-container py-12 px-9'>
    <GeneralInfo
      section='Experiencia'
      title='EMPRESAS EN LAS QUE HE TRABAJADO'
      paragraph='Me he desempeñado mayormente como analista de Software, pero he comenzado con el plan carrera para alcanzar un rol integral.'
      type='row'
    />
    <div className='flex flex-row w-screen gap-12 justify-center'>
      <EnterpriseCard
        picture='data:image/png;base64,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'
        date='27 Septiembre - Actualidad'
        enterprise='TATA CONSULTANCY SERVICES'
        job='Analista de Software'
      />
      <EnterpriseCard
        picture='https://scontent.feoh5-1.fna.fbcdn.net/v/t1.18169-9/25348750_186012645287992_3424817258989496809_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH19-QQ8BNU_h2T7zsT-2NCFNVB6jAh9y0U1UHqMCH3LfGHEt509ElVqVCnsZrGfKqqtN_HpyEOCEns6Sd_a9Vp&_nc_ohc=0n-R3-UWCfQAX9AE9my&_nc_ht=scontent.feoh5-1.fna&oh=00_AT9CO-UDpV_Kf8pd_fkVkhTRNA_48Pdcyh94aE1-JnouMQ&oe=62ED709F'
        date='5 Enero 2020 - 13 Diciembre 2020'
        enterprise='SODESIS SOLUCIONES INFORMÁTICAS'
        job='Venta, reparación y mantenimiento de computadores.'
      />
    </div>
  </div>
);
