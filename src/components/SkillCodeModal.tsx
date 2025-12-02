import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface SkillCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: {
    name: string;
    code: string;
    language: string;
  };
}

const SkillCodeModal = ({ isOpen, onClose, skill }: SkillCodeModalProps) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDisplayedCode("");
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedCode(skill.code.slice(0, index));
        index++;
        if (index > skill.code.length) {
          clearInterval(interval);
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isOpen, skill.code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(skill.code);
    setCopied(true);
    toast({
      title: "Code Copied!",
      description: "Code has been copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    if (skill.language === "JavaScript") {
      try {
        eval(skill.code);
        toast({
          title: "Code Executed!",
          description: "Check your browser console for output",
        });
      } catch (error) {
        toast({
          title: "Execution Error",
          description: "This code cannot be executed directly",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Cannot Execute",
        description: `${skill.language} cannot be executed in browser`,
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="cyber-card w-full max-w-3xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-2xl font-orbitron font-bold text-gradient">
                {skill.name} Code Example
              </h3>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-destructive/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Code Display */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-foreground whitespace-pre-wrap">
                  {displayedCode}
                  <span className="animate-blink">|</span>
                </pre>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 p-6 border-t border-border">
              <Button
                onClick={handleCopy}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Code
                  </>
                )}
              </Button>
              {skill.language === "JavaScript" && (
                <Button
                  onClick={handleRun}
                  className="flex-1 bg-secondary hover:bg-secondary/90"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run Code
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillCodeModal;
