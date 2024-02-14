import React from 'react';
import { Link } from 'react-router-dom';

const MemberIntroductionPage: React.FC = () => {
    return (
        <div className="container">
            <h1>Welcome to Central Library</h1>
            <section>
                <h2>Membership Registration</h2>
                <p>
                    To become a member of Central Library, please visit our registration desk during operating hours. You will need to fill out a registration form and provide a valid ID and proof of address.
                </p>
                <p>
                    Upon successful registration, you will receive a membership card that grants you access to our extensive collection of books, digital resources, and facilities.
                </p>
                <p>
                    If you're ready to register, you can <Link to="/register">click here</Link> to start the process.
                </p>
            </section>
            <section>
                <h2>Rules and Regulations</h2>
                <p>
                    As a member of Central Library, it is important to adhere to our rules and regulations to ensure a pleasant and productive environment for all visitors. Some of our key rules include:
                </p>
                <ul>
                    <li>Respectful behavior towards staff and fellow members.</li>
                    <li>Return borrowed items on time to avoid fines.</li>
                    <li>Keep noise levels to a minimum in designated quiet areas.</li>
                    <li>No food or drinks allowed near library materials.</li>
                    <li>Follow any additional guidelines posted within the library premises.</li>
                </ul>
            </section>
            <section>
                <h2>Perks of Membership</h2>
                <p>
                    Becoming a member of Central Library offers numerous benefits, including:
                </p>
                <ul>
                    <li>Access to a vast collection of books, magazines, and digital resources.</li>
                    <li>Free or discounted admission to library events, workshops, and lectures.</li>
                    <li>Use of study rooms, computer facilities, and printing services.</li>
                    <li>Exclusive access to member-only areas and resources.</li>
                    <li>Opportunities to participate in book clubs, discussion groups, and community programs.</li>
                </ul>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>
                    For any inquiries or assistance regarding membership registration, rules, or perks, please don't hesitate to contact our library staff. We are here to help you make the most of your Central Library membership.
                </p>
                <p>
                    Phone: [Insert library contact number]
                </p>
                <p>
                    Email: [Insert library email address]
                </p>
            </section>
        </div>
    );
};

export default MemberIntroductionPage;
