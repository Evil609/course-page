import React from "react";
import Image from "next/image";
import { Element } from "react-scroll";

function Comments() {
  const [allComments, setAllComments] = React.useState([
    {
      id: 1,
      image: "JohnDoe.jpg",
      name: "John Doe",
      comment:
        "This is a fantastic course! I thoroughly enjoyed the content and the way it was presented. The instructor's expertise was evident, and the examples were very clear and helpful. Highly recommend for anyone looking to deepen their understanding of the subject.",
      date: "July 10, 2021",
    },
    {
      id: 2,
      image: "JaneSmith.jpg",
      name: "Jane Smith",
      comment:
        "I had a wonderful time taking this course! It was well-structured and engaging from start to finish. The instructor did an excellent job of explaining complex topics in a simple and understandable manner. I particularly enjoyed the interactive elements and the practical exercises. I feel confident in applying what I've learned.",
      date: "June 20, 2021",
    },
    {
      id: 3,
      image: "BobJohnson.jpg",
      name: "Bob Johnson",
      comment:
        "The instructor is extremely knowledgeable and provides valuable insights on the subject matter. His teaching style is clear and concise, and he makes the learning process enjoyable. The course materials are comprehensive and well-organized, which helped me grasp the concepts more effectively. I would definitely take another course with this instructor if given the opportunity.",
      date: "May 15, 2021",
    },
  ]);

  const [newComment, setNewComment] = React.useState("");

  function handleNewComment(e) {
    setNewComment(e.target.value);
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date();
  const month = months[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();

  function submitNewComment() {
    if (newComment !== "") {
      const newCommentObj = {
        name: "Anonymous",
        id: allComments.length + 1,
        image: "Anonymous.jpg",
        comment: newComment,
        date: `${month} ${day} ${year}`,
      };
      setAllComments([...allComments, newCommentObj]);
      setNewComment("");
    }
  }

  return (
    <Element name="comments">
      <div className="bg-transparent mt-4 md:mt-8 w-full">
        <p className="text-3xl font-bold">Comments</p>
        <div className="mt-6 p-4">
          {allComments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="flex justify-between items-start gap-5 border-b border-gray-400 border-solid py-4"
              >
                <div className="">
                  <Image
                    src={`/${comment.image}`}
                    className="w-20 h-20 object-cover rounded-full"
                    width={50}
                    height={50}
                    alt={comment.name}
                  ></Image>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-gray-800 ">
                    {comment.name}
                  </p>
                  <p className="text-sm text-gray-600">{comment.date}</p>
                  <p className="mt-2 text-gray-700">{comment.comment}</p>
                </div>
              </div>
            );
          })}
          <div className="mt-4 md:mt-8">
            <textarea
              onChange={handleNewComment}
              value={newComment}
              placeholder="Write A Comment"
              className=" p-4 w-full h-40 bg-white rounded-sm text-lg text-black focus:outline-none focus:shadow-outline drop-shadow-2xl shadow-gray-600 "
            ></textarea>
            <button
              onClick={submitNewComment}
              className="mt-4 bg-emerald-500 text-xl text-white px-4 py-2 rounded-sm hover:bg-emerald-600 cursor-pointer"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Comments;
