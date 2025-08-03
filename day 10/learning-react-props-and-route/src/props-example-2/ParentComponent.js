import ProfileCard from '../props-example-1/ChildComponent';

function ParentComponent() {
    let collageName = "Piet";
    let profile = {
        name: 'Deepak',
        age: 20
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
            <img
                src="/piet.jpg" 
                alt="PIET College"
                className="w-96 h-60 object-cover rounded-xl shadow-md"
            />
            <ProfileCard profile={profile} collageName={collageName} />
        </div>
    );
}

export default ParentComponent;
