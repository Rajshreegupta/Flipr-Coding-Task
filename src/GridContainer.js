import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from './appData';
import './index.css';
import { Color } from '@progress/kendo-drawing';

export const GridContainer = () => (

  <div>
    <Grid style={{ height: '500px' }} data={gridData}>
      <Column field="awbno" title="AWB NUMBER"/>
      <Column field="carrier" title="TRANSPORTER"/>
      <Column field="from" title="SOURCE"/>
      <Column field="to" title="DESTINATION"/>
      <Column field="carrier" title="BRAND"/>
      <Column field="pickup_date" title="START DATE"  />
      <Column field="extra_fields.expected_delivery_date" title="ETD" />
      <Column field="current_status_code" title="STATUS" />
 
    </Grid>
  </div>
);