import React, { useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { Camera, Mic, MicOff, Volume2, VolumeX, Upload, Settings, Activity, Zap, Hand, MessageCircle, Play, Pause, RotateCcw, ArrowRight, Star, Shield, Cpu, Headphones, Eye, Brain, Users, Globe, CheckCircle } from 'lucide-react';
import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Landing Page Component
function LandingPage({ onStart }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      onStart();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1720962158789-9389a4f399da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDB8fHx8MTc1NzkxNTc5MHww&ixlib=rb-4.1.0&q=85" 
            alt="Technology Interface" 
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={16} />
            <span>AI-Powered Gesture Recognition</span>
          </div>
          
          <h1 className="hero-title">
            Transform Your
            <span className="gradient-text"> Gestures </span>
            Into Speech
          </h1>
          
          <p className="hero-description">
            Revolutionary real-time hand gesture recognition technology that translates your movements into text and speech. 
            Break communication barriers with 36+ supported gestures and ASL integration.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">21</div>
              <div className="stat-label">Hand Points Tracked</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">36+</div>
              <div className="stat-label">Gestures Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Real-time</div>
              <div className="stat-label">Recognition</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button 
              className={`cta-button primary ${isLoading ? 'loading' : ''}`}
              onClick={handleGetStarted}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Initializing...
                </>
              ) : (
                <>
                  <Play size={20} />
                  Start Recognition
                  <ArrowRight size={16} />
                </>
              )}
            </button>
            
            <button className="cta-button secondary">
              <Eye size={20} />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Cutting-Edge Features</h2>
            <p>Experience the future of gesture-based communication</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Hand size={32} />
              </div>
              <h3>Advanced Hand Tracking</h3>
              <p>21-point precision tracking using MediaPipe technology for accurate gesture recognition</p>
              <img 
                src="https://images.unsplash.com/photo-1580893211123-627e0262be3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwZ2VzdHVyZXxlbnwwfHx8fDE3NTc5NDcxMjF8MA&ixlib=rb-4.1.0&q=85" 
                alt="Hand Gesture" 
                className="feature-image"
              />
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Volume2 size={32} />
              </div>
              <h3>Real-time Speech</h3>
              <p>Instant text-to-speech conversion with natural voice synthesis and live transcription</p>
              <img 
                src="https://images.unsplash.com/photo-1720962158858-5fb16991d2b8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDB8fHx8MTc1NzkxNTc5MHww&ixlib=rb-4.1.0&q=85" 
                alt="Speech Technology" 
                className="feature-image"
              />
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={32} />
              </div>
              <h3>AI Learning</h3>
              <p>Custom gesture training with machine learning adaptation to your unique signing style</p>
              <img 
                src="https://images.unsplash.com/photo-1600821462314-9dcebd4e7a2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxoYW5kJTIwZ2VzdHVyZXxlbnwwfHx8fDE3NTc5NDcxMjF8MA&ixlib=rb-4.1.0&q=85" 
                alt="OK Gesture" 
                className="feature-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="container">
          <div className="tech-content">
            <div className="tech-info">
              <h2>Powered by Advanced AI</h2>
              <p>Built with cutting-edge technologies for unparalleled accuracy and performance</p>
              
              <div className="tech-features">
                <div className="tech-feature">
                  <CheckCircle size={20} />
                  <span>MediaPipe Computer Vision</span>
                </div>
                <div className="tech-feature">
                  <CheckCircle size={20} />
                  <span>TensorFlow Machine Learning</span>
                </div>
                <div className="tech-feature">
                  <CheckCircle size={20} />
                  <span>Real-time Processing</span>
                </div>
                <div className="tech-feature">
                  <CheckCircle size={20} />
                  <span>ASL Sign Language Support</span>
                </div>
              </div>
              
              <div className="tech-stats">
                <div className="tech-stat">
                  <Cpu size={24} />
                  <div>
                    <div className="tech-stat-number">99.5%</div>
                    <div className="tech-stat-label">Accuracy</div>
                  </div>
                </div>
                <div className="tech-stat">
                  <Zap size={24} />
                  <div>
                    <div className="tech-stat-number">&lt;50ms</div>
                    <div className="tech-stat-label">Latency</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tech-visual">
              <div className="tech-circle">
                <div className="tech-icons">
                  <div className="tech-icon"><Hand size={24} /></div>
                  <div className="tech-icon"><Eye size={24} /></div>
                  <div className="tech-icon"><Brain size={24} /></div>
                  <div className="tech-icon"><Volume2 size={24} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Communication?</h2>
            <p>Join thousands of users breaking barriers with gesture recognition</p>
            <button 
              className={`cta-button primary large ${isLoading ? 'loading' : ''}`}
              onClick={handleGetStarted}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Starting...
                </>
              ) : (
                <>
                  <Play size={24} />
                  Start Now - It's Free
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main App Component
function MainApp({ onBack }) {
  const [isDetecting, setIsDetecting] = useState(false);
  const [currentGesture, setCurrentGesture] = useState(null);
  const [confidence, setConfidence] = useState(0);
  const [detectionHistory, setDetectionHistory] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);
  const [supportedGestures, setSupportedGestures] = useState({ basic_gestures: [], asl_letters: [] });
  const [isTraining, setIsTraining] = useState(false);
  const [trainingGesture, setTrainingGesture] = useState('');
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [liveTranscription, setLiveTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);
  
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const detectionIntervalRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  // Load supported gestures on component mount
  useEffect(() => {
    loadSupportedGestures();
    loadAnalytics();
    initializeSpeechRecognition();
  }, []);

  const loadSupportedGestures = async () => {
    try {
      const response = await axios.get(`${API}/gestures/supported`);
      setSupportedGestures(response.data);
    } catch (error) {
      console.error('Error loading supported gestures:', error);
    }
  };

  const loadAnalytics = async () => {
    try {
      const response = await axios.get(`${API}/analytics/usage`);
      setAnalytics(response.data);
    } catch (error) {
      console.error('Error loading analytics:', error);
    }
  };

  const initializeSpeechRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        
        if (finalTranscript) {
          // Add to history
          const newDetection = {
            id: Date.now(),
            gesture: 'live_speech',
            confidence: 1.0,
            text: finalTranscript.trim(),
            timestamp: new Date().toLocaleTimeString()
          };
          
          setDetectionHistory(prev => [newDetection, ...prev.slice(0, 9)]);
          setLiveTranscription('');
          
          // Generate speech if enabled
          if (isSpeechEnabled) {
            generateSpeech(finalTranscript.trim());
          }
        } else {
          setLiveTranscription(interimTranscript);
        }
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        if (isListening) {
          recognitionRef.current.start(); // Restart if still listening
        }
      };
    }
  };

  const captureImage = useCallback(() => {
    if (webcamRef.current) {
      return webcamRef.current.getScreenshot();
    }
    return null;
  }, []);

  const detectGesture = async () => {
    if (!webcamRef.current || isLoading) return;

    setIsLoading(true);
    try {
      const imageSrc = captureImage();
      if (!imageSrc) return;

      const response = await fetch(imageSrc);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append('file', blob, 'gesture.jpg');

      const apiResponse = await axios.post(`${API}/gesture/detect`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      const data = apiResponse.data;
      
      if (data.success) {
        setCurrentGesture(data.gesture);
        setConfidence(data.confidence);
        
        const newDetection = {
          id: Date.now(),
          gesture: data.gesture,
          confidence: data.confidence,
          text: data.text_output,
          timestamp: new Date().toLocaleTimeString()
        };
        
        setDetectionHistory(prev => [newDetection, ...prev.slice(0, 9)]);

        if (data.speech_url && isSpeechEnabled) {
          playGeneratedSpeech(data.speech_url, data.text_output);
        }
      }
    } catch (error) {
      console.error('Error detecting gesture:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const playGeneratedSpeech = (speechUrl, text) => {
    if (speechUrl === "browser_tts") {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
      }
    } else if (speechUrl.startsWith('data:audio')) {
      const audio = new Audio(speechUrl);
      audio.play().catch(console.error);
    }
  };

  const startDetection = () => {
    setIsDetecting(true);
    setIsListening(true);
    
    // Start gesture detection
    detectGesture();
    detectionIntervalRef.current = setInterval(detectGesture, 2000);
    
    // Start speech recognition
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const stopDetection = () => {
    setIsDetecting(false);
    setIsListening(false);
    setLiveTranscription('');
    
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const generateSpeech = async (text) => {
    try {
      const response = await axios.post(`${API}/tts/generate`, {
        text: text,
        voice_type: 'friendly'
      });

      if (response.data.success) {
        playGeneratedSpeech(response.data.audio_url, text);
      }
    } catch (error) {
      console.error('Error generating speech:', error);
    }
  };

  const uploadTrainingImage = async (event) => {
    if (!trainingGesture) {
      alert('Please enter a gesture name first');
      return;
    }

    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('gesture_name', trainingGesture);

      const response = await axios.post(`${API}/gesture/train`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data.success) {
        alert(`Training data added for: ${trainingGesture}`);
        setTrainingGesture('');
        event.target.value = '';
      }
    } catch (error) {
      console.error('Error uploading training data:', error);
      alert('Error uploading training data');
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setDetectionHistory([]);
    setCurrentGesture(null);
    setConfidence(0);
    setLiveTranscription('');
  };

  return (
    <div className="main-app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo" onClick={onBack}>
            <Hand className="logo-icon" />
            <h1>GestureXpress</h1>
          </div>
          <div className="header-stats">
            {analytics && (
              <>
                <div className="stat">
                  <Activity className="stat-icon" />
                  <span>{analytics.today_detections} today</span>
                </div>
                <div className="stat">
                  <Zap className="stat-icon" />
                  <span>{supportedGestures.total_count} gestures</span>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main-content">
        <div className="app-content-grid">
          {/* Camera Section */}
          <div className="camera-section">
            <div className="camera-container">
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{ 
                  width: 640, 
                  height: 480, 
                  facingMode: "user" 
                }}
                className="webcam"
              />
              
              {isLoading && (
                <div className="loading-overlay">
                  <div className="loading-spinner"></div>
                  <span>Processing...</span>
                </div>
              )}
              
              {currentGesture && (
                <div className="gesture-overlay">
                  <div className="gesture-info">
                    <span className="gesture-name">{currentGesture}</span>
                    <span className="confidence">{(confidence * 100).toFixed(0)}%</span>
                  </div>
                  <div className="confidence-bar">
                    <div 
                      className="confidence-fill"
                      style={{ width: `${confidence * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {/* Live transcription overlay */}
              {liveTranscription && (
                <div className="transcription-overlay">
                  <div className="transcription-content">
                    <Mic className="transcription-icon" />
                    <span>{liveTranscription}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Camera Controls */}
            <div className="camera-controls">
              <button
                onClick={isDetecting ? stopDetection : startDetection}
                className={`control-btn primary ${isDetecting ? 'active' : ''}`}
                disabled={isLoading}
              >
                {isDetecting ? <Pause size={20} /> : <Play size={20} />}
                {isDetecting ? 'Stop All' : 'Start Recognition'}
              </button>

              <button
                onClick={() => setIsSpeechEnabled(!isSpeechEnabled)}
                className={`control-btn ${isSpeechEnabled ? 'active' : ''}`}
              >
                {isSpeechEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                Speech {isSpeechEnabled ? 'On' : 'Off'}
              </button>

              <button
                onClick={clearHistory}
                className="control-btn"
              >
                <RotateCcw size={20} />
                Clear
              </button>
            </div>
          </div>

          {/* Info Panel */}
          <div className="info-panel">
            {/* Current Detection */}
            <div className="detection-current">
              <h3>Live Recognition</h3>
              {currentGesture || liveTranscription ? (
                <div className="current-gesture">
                  <div className="gesture-display">
                    <span className="gesture-name">
                      {liveTranscription || currentGesture}
                    </span>
                    <button 
                      onClick={() => generateSpeech(liveTranscription || currentGesture)}
                      className="play-btn"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                  {confidence > 0 && (
                    <div className="confidence-info">
                      Confidence: {(confidence * 100).toFixed(1)}%
                    </div>
                  )}
                </div>
              ) : (
                <div className="no-gesture">
                  <MessageCircle size={24} />
                  <span>Speak or show gesture</span>
                </div>
              )}
            </div>

            {/* Detection History */}
            <div className="detection-history">
              <h3>Recent Activity</h3>
              <div className="history-list">
                {detectionHistory.length > 0 ? (
                  detectionHistory.map((detection) => (
                    <div key={detection.id} className="history-item">
                      <div className="history-gesture">
                        <span className="gesture-name">
                          {detection.gesture === 'live_speech' ? '🎤' : '👋'} {detection.gesture}
                        </span>
                        <span className="timestamp">{detection.timestamp}</span>
                      </div>
                      <div className="history-details">
                        <span className="text-output">{detection.text}</span>
                        <div className="confidence-mini">
                          {(detection.confidence * 100).toFixed(0)}%
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-history">
                    <Activity size={24} />
                    <span>No activity yet</span>
                  </div>
                )}
              </div>
            </div>

            {/* Supported Gestures */}
            <div className="supported-gestures">
              <h3>Supported Gestures</h3>
              <div className="gesture-categories">
                <div className="gesture-category">
                  <h4>Basic Gestures</h4>
                  <div className="gesture-chips">
                    {supportedGestures.basic_gestures.map((gesture) => (
                      <span key={gesture} className="gesture-chip">
                        {gesture.replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="gesture-category">
                  <h4>ASL Letters</h4>
                  <div className="gesture-chips">
                    {supportedGestures.asl_letters.slice(0, 10).map((letter) => (
                      <span key={letter} className="gesture-chip asl">
                        {letter}
                      </span>
                    ))}
                    {supportedGestures.asl_letters.length > 10 && (
                      <span className="gesture-chip more">
                        +{supportedGestures.asl_letters.length - 10} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Training Section */}
            <div className="training-section">
              <h3>Train Custom Gesture</h3>
              <div className="training-form">
                <input
                  type="text"
                  placeholder="Enter gesture name"
                  value={trainingGesture}
                  onChange={(e) => setTrainingGesture(e.target.value)}
                  className="training-input"
                />
                <label className="upload-btn">
                  <Upload size={16} />
                  Upload Training Image
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={uploadTrainingImage}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Root App Component
function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' or 'app'

  const handleStartApp = () => {
    setCurrentView('app');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  return (
    <div className="App">
      {currentView === 'landing' ? (
        <LandingPage onStart={handleStartApp} />
      ) : (
        <MainApp onBack={handleBackToLanding} />
      )}
    </div>
  );
}

export default App;
