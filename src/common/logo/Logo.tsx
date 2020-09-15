import React from 'react';

interface LogoProps {
  className?: string | undefined;
  style?: React.CSSProperties;
}

const Logo = ({ className, style }: LogoProps) => (
  <div className={['logo', className].join(' ')} style={style}>
    <div className="logo-title">Island Prime</div>
    <div className="logo-strapline">Luxury Island Cafe</div>
  </div>
);

export default Logo;
