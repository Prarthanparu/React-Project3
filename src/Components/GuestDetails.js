import React from 'react';


function GuestDetails() {
    return (
        <section>
                <section>
                        
                            <span style={{"font-size":"12px","color":"#93329E","font-weight":"bold"}}>Guest 1 - Adult</span>
                            <h2 style={{"font-size":"10px","color":"gray","marginTop":"0"}}>Andy Sandra</h2>  
                            <span style={{"font-size":"12px","color":"#93329E","font-weight":"bold"}}>Guest 1 - Adult</span>
                            <h2 style={{"font-size":"10px","color":"gray","marginTop":"0"}}>Andy Sandra</h2>  
                            <span style={{"font-size":"12px","color":"#93329E","font-weight":"bold"}}>Guest 1 - Adult</span>
                            <h2 style={{"font-size":"10px","color":"gray","marginTop":"0"}}>Andy Sandra</h2>  
                           
                        
                    </section>
                    <section >
                            <div>
                                <label for="Guest" style={{"font-size":"12px","color":"#93329E","float":"right"}}>Primary Guest</label><br />
                                <input type="checkbox" name="guest" id="guest" style={{"float":"right"}}/>          
                            </div>
                             <div >
                                <label for="Guest" style={{"font-size":"12px","color":"#93329E","float":"right","padding-top":"10px"}}>Primary Guest</label><br />
                                <input type="checkbox" name="guest" id="guest" style={{"float":"right"}}/>          
                            </div>
                             <div>
                                <label for="Guest" style={{"font-size":"12px","color":"#93329E","float":"right","padding-top":"10px"}}>Primary Guest</label><br />
                                <input type="checkbox" name="guest" id="guest" style={{"float":"right"}}/>          
                            </div>
                            
                    </section>
        </section>
    )
}

export default GuestDetails;

