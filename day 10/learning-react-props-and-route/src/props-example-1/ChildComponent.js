function ProfileCard({ profile, collageName }) {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Profile Info</h2>
            <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> {profile.name}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Age:</strong> {profile.age}</p>
            <p className="text-md text-gray-500 mt-4 ">College: {collageName}</p>
        </div>
    );
}

export default ProfileCard;
