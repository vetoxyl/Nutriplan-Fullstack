import { useState } from "react";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  ClipboardList,
  FileText,
  Gift,
  Home,
  MessageCircle,
  Search,
  ShoppingBag,
  User,
  Bell,
  ShoppingCart,
} from "lucide-react";

import "./Homepage.css";

export default function NutriPlan() {
  // State for tracking active menu item
  const [activeMenuItem, setActiveMenuItem] = useState("meal-plan");

  return (
    <>
      <div className="nutriplan-container">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo">
              <span className="logo-nutri">Nutri</span>
              <span className="logo-plan">Plan</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="nav-menu">
            <div className="menu-items">
              <MenuItem
                icon={<ClipboardList />}
                label="My meal Plans"
                id="meal-plan"
                active={activeMenuItem === "meal-plan"}
                onClick={() => setActiveMenuItem("meal-plan")}
              />
              <MenuItem
                icon={<User />}
                label="Profile"
                id="profile"
                active={activeMenuItem === "profile"}
                onClick={() => setActiveMenuItem("profile")}
              />
              <MenuItem
                icon={<Home />}
                label="Meals"
                id="meals"
                active={activeMenuItem === "meals"}
                onClick={() => setActiveMenuItem("meals")}
              />
              <MenuItem
                icon={<ShoppingBag />}
                label="Shop"
                id="shop"
                active={activeMenuItem === "shop"}
                onClick={() => setActiveMenuItem("shop")}
              />
              <MenuItem
                icon={<Search />}
                label="Discover"
                id="discover"
                active={activeMenuItem === "discover"}
                onClick={() => setActiveMenuItem("discover")}
              />
              <MenuItem
                icon={<BookOpen />}
                label="Learn"
                id="learn"
                active={activeMenuItem === "learn"}
                onClick={() => setActiveMenuItem("learn")}
              />
              <MenuItem
                icon={<MessageCircle />}
                label="AI ChatBot"
                id="chatbot"
                active={activeMenuItem === "chatbot"}
                onClick={() => setActiveMenuItem("chatbot")}
              />
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Top Navigation */}
          <div className="top-nav">
            <div className="nav-buttons">
              <NavButton icon={<FileText />} label="Meal Plan" active />
              <NavButton icon={<ClipboardList />} label="Log" />
              <NavButton icon={<MessageCircle />} label="Nutri AI" />
            </div>
            <div className="user-actions">
              <div className="action-item">
                <ShoppingCart className="action-icon" />
                <span className="action-label">cart</span>
              </div>
              <div className="action-item">
                <Bell className="action-icon" />
                <span className="action-label">Notification</span>
              </div>
              <div className="action-item">
                <User className="action-icon" />
                <span className="action-label">Account</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="dashboard-content">
            <div className="content-cards">
              {/* Alert Banner */}
              <div className="card alert-card">
                <div className="alert-title">Low Sodium Diet Plan Active</div>
                <div className="alert-description">
                  Your meal suggestions are optimized for your hypertension
                  management.
                </div>
                <div className="alert-detail">
                  Sodium today: 1,250mg of 2,000mg limit
                </div>
              </div>

              {/* User Welcome Card */}
              <div className="card welcome-card">
                <div className="welcome-header">
                  <h2 className="welcome-title">Hello, John</h2>
                  <p className="welcome-subtitle">
                    Your personalized nutrition journey
                  </p>
                </div>

                <div className="progress-container">
                  <div className="progress-header">
                    <div className="progress-label">Your Progress</div>
                    <div className="week-label">Week 3</div>
                  </div>

                  <div className="weight-progress">
                    <div className="current-weight">
                      <div className="weight-label">Current</div>
                      <div className="weight-value">185 kg</div>
                      <div className="weight-loss-label">Weekly Loss</div>
                      <div className="weight-loss-value">
                        <div className="indicator-dot"></div>
                        <span>0.5 kg</span>
                      </div>
                    </div>

                    <div className="progress-bar-container">
                      <div className="progress-bar">
                        <div className="progress-fill"></div>
                      </div>
                      <div className="calories-info">
                        <div className="calories-label">Daily calories</div>
                        <div className="calories-value">1820 kcal</div>
                      </div>
                    </div>

                    <div className="goal-weight">
                      <div className="weight-label">Goal</div>
                      <div className="weight-value">120 kg</div>
                      <div className="adherence-label">Plan Adherence</div>
                      <div className="adherence-value">85%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suggestions Section */}
              <div className="card suggestions-card">
                <div className="suggestions-title">
                  Suggestions:{" "}
                  <span className="suggestions-subtitle">Low Sodium diets</span>
                </div>

                <div className="food-images">
                  <div className="food-image-container">
                    <img
                      src="https://picsum.photos/200"
                      alt="Healthy salad bowl with vegetables and protein"
                      className="food-image"
                    />
                  </div>
                  <div className="food-image-container">
                    <img
                      src="https://picsum.photos/200"
                      alt="Mediterranean plate with vegetables"
                      className="food-image"
                    />
                  </div>
                </div>
              </div>

              {/* Today's Meal Section */}
              <div className="card meals-card">
                <div className="meals-header">
                  <div className="meals-title">Todays Meal</div>
                  <div className="calendar-link">
                    <Calendar className="calendar-icon" />
                    <span>Calendar</span>
                  </div>
                </div>

                {/* Meal Items */}
                <MealItem
                  mealType="Breakfast"
                  mealName="Vegan Protein Smoothie"
                  calories="320"
                />

                <div className="meal-divider"></div>

                <MealItem
                  mealType="Launch"
                  mealName="Mediterranean Salad Bowl"
                  calories="320"
                />

                <div className="meal-divider"></div>

                <MealItem
                  mealType="Dinner"
                  mealName="Lentil Curry with Brown Rice"
                  calories="320"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Menu Item Component
function MenuItem({ icon, label, id, active, onClick }) {
  return (
    <div className={`menu-item ${active ? "active" : ""}`} onClick={onClick}>
      <div className="menu-icon">{icon}</div>
      <div className="menu-label">{label}</div>
    </div>
  );
}

// Top Navigation Button Component
function NavButton({ icon, label, active }) {
  return (
    <div className={`nav-button ${active ? "active" : ""}`}>
      <div className="nav-icon">{icon}</div>
      <div className="nav-label">{label}</div>
    </div>
  );
}

// Meal Item Component
function MealItem({ mealType, mealName, calories }) {
  return (
    <div className="meal-item">
      <div className="meal-info">
        <div className="meal-image"></div>
        <div className="meal-details">
          <div className="meal-type">{mealType}</div>
          <div className="meal-name">{mealName}</div>
        </div>
      </div>
      <div className="meal-metrics">
        <div className="meal-calories">{calories} kcal</div>
        <div className="meal-view">view</div>
      </div>
    </div>
  );
}
