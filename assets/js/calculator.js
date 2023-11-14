function calculate(){
  // 1. init & validate
  const unit = input.get('units').raw();
  const unitCoeff = {
    'meters (m)': 1,
    'inches (in)': 0.0254**2,
    'feets (ft)': 0.3048**2,
    'yards (yd)': 0.9144**2,
    'acres (ac)': 4046.86,
    'hectares (ha)': 1e4,
    'millimeters (mm)': 1e-3**2,
    'centimeters (cm)': 1e-2**2,
    'kilometers (km)': 1e+3**2,
    'miles (mi)': 1609.34**2
  };

  // 2. calculate
  let area = 0;
  const get = id => input.get(id).positive().val();
  switch($('[data-tab].tab--active').dataset.tab){
    case '0':{ // Rectangle
      const a = get('length_a');
      const b = get('width_a');
      if(!input.valid()) return;
      area = calc(`${a}*${b}`);
    }break;
    case '1':{ // Triangle
      const a = get('side_a_a');
      const b = get('side_b_a');
      const c = get('side_c_a');
      if(!input.valid()) return;
      const s = calc(`(${a}+${b}+${c})/2`);
      area = calc(`sqrt(${s}*(${s}-${a})*(${s}-${b})*(${s}-${c}))`);
    }break;
    case '2':{ // Trapezoid
      const a = get('side_a_b');
      const b = get('side_b_b');
      const h = get('heigth_b');
      if(!input.valid()) return;
      area = calc(`${h}*(${a}+${b})/2`);
    }break;
    case '3':{ // Circle
      const r = get('radius_c');
      if(!input.valid()) return;
      area = calc(`pi*${r}^2`);
    }break;
    case '4':{ // Sector
      const r = get('radius_d');
      const a = get('angle_d');
      if(!input.valid()) return;
      area = calc(`${a}/360*pi*${r}^2`);
    }break;
    case '5':{ // Ellipse
      const a = get('semi_major_axes_a_e');
      const b = get('semi_major_axes_b_e');
      if(!input.valid()) return;
      area = calc(`pi*${a}*${b}`);
    }break;
    case '6':{ // Parallelogram
      const b = get('base_f');
      const h = get('height_f');
      if(!input.valid()) return;
      area = calc(`${b}*${h}`);
    }break;
  }
  area*= unitCoeff[unit];

  // 3. output
  _('result_m').innerHTML = calc(`${area}/${unitCoeff['meters (m)']}`);
  _('result_in').innerHTML = calc(`${area}/${unitCoeff['inches (in)']}`);
  _('result_ft').innerHTML = calc(`${area}/${unitCoeff['feets (ft)']}`);
  _('result_yd').innerHTML = calc(`${area}/${unitCoeff['yards (yd)']}`);
  _('result_ac').innerHTML = calc(`${area}/${unitCoeff['acres (ac)']}`);
  _('result_ha').innerHTML = calc(`${area}/${unitCoeff['hectares (ha)']}`);
}

window.addEventListener('load', () => math.config({number:'BigNumber', precision: 9}));