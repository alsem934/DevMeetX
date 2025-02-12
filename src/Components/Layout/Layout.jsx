


import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
function LayOut({children,hideFooter}) {
  return (
<div>
    <Header/>
    {children}
    {!hideFooter && <Footer />}
</div>
  )
}
export default LayOut