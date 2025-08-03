import ProfileCard from './ProfileCard';

function Profile() {
    // arrays of object
    let profileArray = [
        { 'name': 'Deepak', 'age': 20, 'location': 'Karnal' },
        { 'name': 'Pooja', 'age': 19, 'location': 'Samalkha' },
        { 'name': 'Ashu', 'age': 20, 'location': 'Mars' },
        { 'name': 'Dheeraj', 'age': 26, 'location': 'Delhi' }]

    return (
        <div className="p-10 bg-red-200 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">User Profiles</h1>
            
            <div className="flex flex-wrap justify-center gap-6">
            {profileArray.map((value, index) => (
                <ProfileCard 
                name={value.name} 
                age={value.age} 
                location={value.location} />
            ))}
            </div>

        </div>
    );
}

export default Profile;