import { Label, Grid, Button, Card, Image } from 'semantic-ui-react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import UsersAndFestivalsService from '../../service/usersAndFestivalsService';
import './FestivalCard.css'

const FestivalCard = ({f}) => {

    const { user, setUser } = useContext(UserContext)

    const handleSaveFestivalClick = (fest) => {
        console.log(fest)
        console.log(user)
        

        UsersAndFestivalsService.addFestivalToUser(fest, user._id);


        
    }

    return(
        <>  
            
            <Grid.Column className='festival-card' key={f.name}> 
                
                <Card style={{overflow: 'auto', maxHeight: 420, minHeight: 420 }}>
                
                    {f.image ? 
                    <Image src={f.image} wrapped ui={false}/>
                    :
                    <Image className='fstvl_img_not_found' src="https://i.ibb.co/jJgFNK1/facebook-profile-image.png" wrapped ui={false}/>
                    }
                    <Card.Content>
                        <Card.Description>
                            <Label 
                                size='medium'
                                className='fest-info-label'>
                                Name:</Label>
                            {' '+f.name}
                            


                            
                            
                            {(!f.locations || f.locations.length === 0) ?
                            null :
                            <div>
                                <Label 
                                size='medium'
                                className='fest-info-label'>
                                Locations:</Label>
                                {' '+f.locations.reduce((p, n)=> p+' | '+n)}
                            </div>
                            }
                            

                            
                            {(!f.dates || f.dates.length === 0)?
                            null :
                            <div>
                                <Label 
                                size='medium'
                                className='fest-info-label'>
                                Dates:</Label>
                                {' '+f.dates.reduce((p, n)=> p+' | '+n)}
                            </div>                    
                            }

                            
                            {(!f.genres || f.genres.length === 0)?
                            null :
                            <div>
                                <Label 
                                size='medium'
                                className='fest-info-label'>
                                Genres:</Label>
                                {' '+f.genres.reduce((p, n)=> p+' | '+n)}
                            </div>
                            }

                            
                            {(!f.websites  || f.websites.length === 0)?

                                null  :
                                <div>
                                    <Label
 
                                    size='medium'
                                    className='fest-info-label'>
                                    Websites:</Label>

                                    {f.websites.map(ws => {
                                    return ws.length < 50 ?
                                    <div className='fstvl-website-link'>
                                        <a href={ws}>{ws}</a>
                                    </div> :
                                    <div className='fstvl-website-link'>
                                        <a href={ws}>{ws.slice(1,35)}...</a>
                                    </div>
                                    
                                    })}

                                </div>
                                
                            }
                            

                            <div>
                                <Button color='green'
                                    onClick={() => handleSaveFestivalClick(f)}
                                >Save</Button>
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column> 
            
        </>
    )
}

export default FestivalCard;