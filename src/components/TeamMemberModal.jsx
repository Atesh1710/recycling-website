import { motion } from "framer-motion";

export default function TeamMemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full text-center relative"
      >
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500" 
          onClick={onClose}
        >
          ✖
        </button>
        <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-black">{member.name}</h3>
        <p className="text-sm text-gray-800 mb-4">{member.role}</p>
        <p className="text-gray-700 text-sm">
          {/* Example detail, you can expand this */}
          {member.details || "More information about the team member will appear here."}
        </p>
        <hr className="my-4 border-gray-300"/>
        <p className="text-sm text-gray-600">
  <strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-accent">{member.email}</a>
</p>
<p className="text-sm text-gray-600 mt-1">
  <strong>Phone:</strong> <a href={`tel:${member.phone}`} className="text-accent">{member.phone}</a>
</p>
<p className="text-sm text-gray-600 mt-1">
  <strong>LinkedIn:</strong> <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent underline">
    View Profile
  </a>
  </p>
      </motion.div>
    </div>
  );
}
