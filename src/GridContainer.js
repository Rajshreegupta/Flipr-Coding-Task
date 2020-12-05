import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { gridData } from './appData';
import './index.css';
import { Color } from '@progress/kendo-drawing';

export const GridContainer = () => (

  <div className="orderGrid">
    <Grid style={{ height: '500px', color: '#00010e' }} data={gridData}>
      <Column field="awbno" title="AWB NUMBER" width="100px" align="center"/>
      <Column field="carrier" title="TRANSPORTER" width="130px" />
      <Column field="from" title="SOURCE" width="100px" align="center"/>
      <Column field="to" title="DESTINATION" width="100px" />
      <Column field="carrier" title="BRAND" width="100px" />
      <Column field="pickup_date" title="START DATE" width="100px" />
      <Column field="extra_fields.expected_delivery_date" title="ETD" width="100px" />
      <Column field="current_status_code" title="STATUS" width="100px" />
 
    </Grid>
  </div>
);