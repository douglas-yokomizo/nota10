import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Select from "../components/ui/Select";
import Modal from "../components/ui/Modal";
import useForm from "../hooks/useForm";
import { Header } from "../components/layout/Header";

interface Alternative {
  text: string;
}

interface Question {
  title: string;
  alternatives: Alternative[];
}

interface ActivityFormValues {
  subject: string;
  class: string;
  title: string;
}

const CreateActivityPage = () => {
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    title: "",
    alternatives: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
  });

  // Mock data for subjects and classes
  const subjects = [
    { value: "math", label: "Matemática" },
    { value: "portuguese", label: "Português" },
    { value: "science", label: "Ciências" },
    { value: "history", label: "História" },
    { value: "geography", label: "Geografia" },
    { value: "english", label: "Inglês" },
    { value: "arts", label: "Artes" },
    { value: "pe", label: "Educação Física" },
  ];

  const classes = [
    { value: "5a", label: "5º ano A" },
    { value: "5b", label: "5º ano B" },
    { value: "6a", label: "6º ano A" },
    { value: "6b", label: "6º ano B" },
  ];

  const { values, handleChange } = useForm<ActivityFormValues>({
    initialValues: {
      subject: "",
      class: "",
      title: "",
    },
    onSubmit: (formValues) => {
      if (questions.length === 0) {
        alert(
          "Adicione pelo menos uma questão antes de cadastrar a atividade."
        );
        return;
      }

      console.log("Form submitted:", {
        ...formValues,
        questions,
      });
      // Here you would typically send the data to your backend
      alert("Atividade cadastrada com sucesso!");
    },
  });

  const handleSubmit = () => {
    if (questions.length === 0) {
      alert("Adicione pelo menos uma questão antes de cadastrar a atividade.");
      return;
    }

    console.log("Form submitted:", {
      ...values,
      questions,
    });
    // Here you would typically send the data to your backend
    alert("Atividade cadastrada com sucesso!");
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestion({
      ...currentQuestion,
      title: e.target.value,
    });
  };

  const handleAlternativeChange = (index: number, value: string) => {
    const updatedAlternatives = [...currentQuestion.alternatives];
    updatedAlternatives[index] = { text: value };
    setCurrentQuestion({
      ...currentQuestion,
      alternatives: updatedAlternatives,
    });
  };

  const addQuestion = () => {
    if (!currentQuestion.title.trim()) {
      alert("O título da questão é obrigatório.");
      return;
    }

    if (currentQuestion.alternatives.some((alt) => !alt.text.trim())) {
      alert("Todas as alternativas devem ser preenchidas.");
      return;
    }

    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      title: "",
      alternatives: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Nova atividade
          </h2>

          <form className="space-y-4">
            <Select
              name="class"
              options={classes}
              placeholder="Selecione a turma"
              value={values.class}
              onChange={handleChange}
              required
              fullWidth
            />

            <Select
              name="subject"
              options={subjects}
              placeholder="Selecione a matéria"
              value={values.subject}
              onChange={handleChange}
              required
              fullWidth
            />

            <Input
              name="title"
              placeholder="Digite o nome da Atividade"
              value={values.title}
              onChange={handleChange}
              required
              fullWidth
            />

            {/* Question Section */}
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-medium mb-4">Adicionar questão</h3>

              <div className="space-y-3">
                <Input
                  placeholder="Título da questão"
                  value={currentQuestion.title}
                  onChange={handleQuestionChange}
                  fullWidth
                />

                {currentQuestion.alternatives.map((alt, index) => (
                  <Input
                    key={index}
                    placeholder={`Alternativa ${index + 1}`}
                    value={alt.text}
                    onChange={(e) =>
                      handleAlternativeChange(index, e.target.value)
                    }
                    fullWidth
                  />
                ))}
              </div>
            </div>

            <Button
              type="button"
              onClick={addQuestion}
              fullWidth
              className="bg-[#6952EB] hover:bg-[#5842d6] text-white py-3 rounded-md font-medium"
            >
              ADICIONAR NOVA QUESTÃO
            </Button>

            {questions.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">
                  Questões adicionadas: {questions.length}
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {questions.map((q, index) => (
                    <li key={index}>{q.title}</li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              type="button"
              onClick={handleSubmit}
              fullWidth
              className="bg-[#B3FF3B] hover:bg-[#a1e535] text-black py-3 rounded-md font-medium mt-6"
            >
              CADASTRAR ATIVIDADE
            </Button>
          </form>
        </div>
      </main>

      {/* Notification Modal */}
      <Modal
        isOpen={isNotifyModalOpen}
        onClose={() => setIsNotifyModalOpen(false)}
        title="Notificar responsável"
      >
        <div className="space-y-4">
          <TextArea
            placeholder="Digite a mensagem para o responsável..."
            rows={4}
            fullWidth
          />
          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => setIsNotifyModalOpen(false)}
              className="bg-[#B3FF3B] hover:bg-[#a1e535] text-black py-2 px-4 rounded-md font-medium"
            >
              ENVIAR NOTIFICAÇÃO
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateActivityPage;
